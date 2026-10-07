
import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

import avatarModel from "../assets/character/models/avatar.fbx";
import idleAnimation from "../assets/character/animations/Idle (1).fbx";
import golfAnimation from "../assets/character/animations/GolfDrive.fbx";
import waveAnimation from "../assets/character/animations/Waving (3).fbx";

import sitAnimation from "../assets/character/animations/Sitting (2).fbx";

export function initCharacter(container) {
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
        25,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );

    camera.position.set(0, 2, 9);
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    // --------------------------------
    // Lights
    // --------------------------------

    scene.add(
        new THREE.AmbientLight(0xffffff, 3)
    );

    const light = new THREE.DirectionalLight(
        0xffffff,
        5
    );

    light.position.set(5, 10, 5);
    scene.add(light);

    // --------------------------------
    // Mouse
    // --------------------------------

    let mouseX = 0;
    let mouseY = 0;
    let mouseZ = 0;

    let isMouseMoving = false;
    let mouseStopTimer = null;

    const MOUSE_IDLE_DELAY = 1000;

    const handleMouseMove = (event) => {
        mouseX =
            (event.clientX / window.innerWidth) * 2 - 1;

        mouseY =
            (event.clientY / window.innerHeight) * 2 - 1;

        
            isMouseMoving = true;

            

        clearTimeout(mouseStopTimer);

        mouseStopTimer = setTimeout(() => {
            isMouseMoving = false;

            
        }, MOUSE_IDLE_DELAY);
    };

    window.addEventListener(
        "mousemove",
        handleMouseMove
    );

    // --------------------------------
    // Character variables
    // --------------------------------

    let avatar = null;
    let mixer = null;
    let headBone = null;

    let targetHeadX = 0;
    let targetHeadY = 0;
    let targetHeadZ = 0;

    let currentAnimation = null;

    const actions = {};

    const automaticAnimations = [
        "Sit",
        "Golf"
    ];

    let automaticIndex = 0;

    const IDLE_TIME = 6000;

    let idleTimer = null;

    const clock = new THREE.Clock();

    const loader = new FBXLoader();

    const startPosition = new THREE.Vector3();

    // --------------------------------
    // Responsive character
    // --------------------------------

    function updateCharacterResponsive() {
        if (!avatar) return;

        // Keep your current React portfolio size.
        avatar.scale.setScalar(0.4);

        const box =
            new THREE.Box3().setFromObject(avatar);

        const center =
            box.getCenter(new THREE.Vector3());

        avatar.position.set(
            0,
            -box.min.y + 0.1,
            -center.z
        );

        startPosition.copy(avatar.position);
    }

    // --------------------------------
    // Load Character
    // --------------------------------

    loader.load(
        avatarModel,
        (fbx) => {
            console.log("Character Loaded");

            avatar = fbx;

            scene.add(avatar);

            avatar.traverse((obj) => {
                if (obj.isBone) {
                    console.log("Bone:", obj.name);

                    // IMPORTANT:
                    // Use the first mixamorigHead bone,
                    // exactly like your old working code.
                    if (
                        obj.name === "mixamorigHead" &&
                        headBone === null
                    ) {
                        headBone = obj;

                        console.log(
                            "Using Head Bone:",
                            headBone
                        );
                    }
                }
            });

            updateCharacterResponsive();

            mixer =
                new THREE.AnimationMixer(avatar);

            mixer.addEventListener(
                "finished",
                onAnimationFinished
            );

            loadAnimation(
                "Idle",
                idleAnimation
            );

            loadAnimation(
                "Golf",
                golfAnimation
            );

            loadAnimation(
                "Wave",
                waveAnimation
            );

            

            loadAnimation(
                "Sit",
                sitAnimation
            );
        },
        undefined,
        (error) => {
            console.error(
                "Error loading character:",
                error
            );
        }
    );

    // --------------------------------
    // Load Animation
    // --------------------------------

    function loadAnimation(name, path) {
        loader.load(
            path,
            (fbx) => {
                if (!fbx.animations.length) {
                    console.warn(
                        name +
                        " animation not found"
                    );

                    return;
                }

                const clip =
                    fbx.animations[0];

                clip.tracks.forEach((track) => {
                    track.name =
                        track.name.replace(
                            "mixamorig:",
                            "mixamorig"
                        );
                });

                const action =
                    mixer.clipAction(clip);

                actions[name] = action;

                console.log(
                    name,
                    "Loaded",
                    clip.tracks.length,
                    "tracks",
                    "Duration:",
                    clip.duration.toFixed(2),
                    "seconds"
                );

                // Start Wave after 3 seconds.
                if (
                    name === "Wave" &&
                    !currentAnimation
                ) {
                    setTimeout(() => {
                        playAnimation("Wave");
                    }, 3000);
                }
            },
            undefined,
            (error) => {
                console.error(
                    "Error loading " + name,
                    error
                );
            }
        );
    }

    // --------------------------------
    // Play Animation
    // --------------------------------

    function playAnimation(name) {
        const action = actions[name];

        if (!action) {
            console.log(
                "Animation missing:",
                name
            );

            return;
        }

        if (idleTimer) {
            clearTimeout(idleTimer);
            idleTimer = null;
        }

        const previousAction =
            currentAnimation &&
            actions[currentAnimation]
                ? actions[currentAnimation]
                : null;

        action.reset();

        action.setLoop(
            THREE.LoopOnce,
            1
        );

        action.clampWhenFinished = true;

        action.timeScale = 0.7;

        action.play();

        if (
            previousAction &&
            previousAction !== action
        ) {
            action.crossFadeFrom(
                previousAction,
                0.5,
                false
            );
        }

        if (avatar) {
            avatar.position.copy(
                startPosition
            );
        }

        currentAnimation = name;

        console.log(
            "Playing:",
            name
        );
    }

    // --------------------------------
    // Idle
    // --------------------------------

    function startIdle(nextAnimation) {
        const idleAction =
            actions["Idle"];

        if (!idleAction) {
            console.log(
                "Idle animation missing"
            );

            return;
        }

        if (idleTimer) {
            clearTimeout(idleTimer);
            idleTimer = null;
        }

        const previousAction =
            currentAnimation &&
            actions[currentAnimation]
                ? actions[currentAnimation]
                : null;

        idleAction.reset();

        idleAction.setLoop(
            THREE.LoopRepeat
        );

        idleAction.clampWhenFinished =
            false;

        idleAction.fadeIn(0.5);

        idleAction.play();

        if (
            previousAction &&
            previousAction !== idleAction
        ) {
            idleAction.crossFadeFrom(
                previousAction,
                0.5,
                false
            );
        }

        currentAnimation = "Idle";

        console.log(
            "Smooth transition → Idle"
        );

        idleTimer = setTimeout(() => {
            if (!isMouseMoving) {
                playAnimation(
                    nextAnimation
                );
            } else {
                const waitForMouse =
                    setInterval(() => {
                        if (!isMouseMoving) {
                            clearInterval(
                                waitForMouse
                            );

                            playAnimation(
                                nextAnimation
                            );
                        }
                    }, 100);
            }
        }, IDLE_TIME);
    }

    // --------------------------------
    // Animation Finished
    // --------------------------------

    function onAnimationFinished(event) {
        const finishedAction =
            event.action;

        if (
            currentAnimation === "Wave" &&
            finishedAction ===
                actions.Wave
        ) {
            console.log(
                "Wave finished → Idle → Sit"
            );

            automaticIndex = 0;

            startIdle(
                automaticAnimations[
                    automaticIndex
                ]
            );

            return;
        }

        if (
            currentAnimation === "Sit" ||
            currentAnimation === "Golf"
        ) {
            automaticIndex++;

            if (
                automaticIndex >=
                automaticAnimations.length
            ) {
                automaticIndex = 0;
            }

            const nextAnimation =
                automaticAnimations[
                    automaticIndex
                ];

            console.log(
                currentAnimation +
                " finished → Idle → " +
                nextAnimation
            );

            startIdle(
                nextAnimation
            );
        }
    }

    // --------------------------------
    // Resize
    // --------------------------------

    const handleResize = () => {
        const width =
            container.clientWidth;

        const height =
            container.clientHeight;

        camera.aspect =
            width / height;

        camera.updateProjectionMatrix();

        renderer.setSize(
            width,
            height
        );

        updateCharacterResponsive();
    };

    window.addEventListener(
        "resize",
        handleResize
    );

    // --------------------------------
    // Animation Loop
    // --------------------------------

    let animationFrameId;

    function animate() {
        animationFrameId =
            requestAnimationFrame(
                animate
            );

        const delta =
            clock.getDelta();

        if (mixer) {
            mixer.update(delta);
        }

        // --------------------------------
        // OLD WORKING MOUSE HEAD MOVEMENT
        // --------------------------------

        if (headBone) {
            targetHeadY =
                mouseX * 0.6;

            targetHeadX =
                mouseY * 0.6;

            targetHeadZ =
                mouseZ * 0.6;

            headBone.rotation.y +=
                (
                    targetHeadY -
                    headBone.rotation.y
                ) * 0.5;

            headBone.rotation.x +=
                (
                    targetHeadX -
                    headBone.rotation.x
                ) * 0.5;
        }

        renderer.render(
            scene,
            camera
        );
    }

    animate();

    // --------------------------------
    // Cleanup
    // --------------------------------

    return () => {
        cancelAnimationFrame(
            animationFrameId
        );

        window.removeEventListener(
            "mousemove",
            handleMouseMove
        );

        window.removeEventListener(
            "resize",
            handleResize
        );

        clearTimeout(
            mouseStopTimer
        );

        clearTimeout(
            idleTimer
        );

        if (mixer) {
            mixer.stopAllAction();
        }

        renderer.dispose();

        if (
            renderer.domElement &&
            container.contains(
                renderer.domElement
            )
        ) {
            container.removeChild(
                renderer.domElement
            );
        }
    };
}
