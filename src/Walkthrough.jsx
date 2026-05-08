
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { storage } from "./firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const TITLE_FONT = '"Cormorant Garamond", Georgia, serif';

function Walkthrough({ onExit }) {
  const mountRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    const loadFiles = async () => {
      try {
        const folderRef = ref(storage, "golestan/");
        const result = await listAll(folderRef);

        const urls = await Promise.all(
          result.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return {
              name: item.name,
              url,
            };
          })
        );

        setFiles(urls);
      } catch (error) {
        console.error("Failed to load Firebase files in Walkthrough:", error);
      }
    };

    loadFiles();
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#dce5ea");
    scene.fog = new THREE.Fog("#dce5ea", 35, 180);

    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2.2, 24);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    const controls = new PointerLockControls(camera, renderer.domElement);
    const raycaster = new THREE.Raycaster();
    const interactables = [];

    // ---------- LIGHTING ----------
    const ambientLight = new THREE.AmbientLight("#ffffff", 0.95);
    scene.add(ambientLight);

    const sun = new THREE.DirectionalLight("#fff6e8", 1.25);
    sun.position.set(22, 30, 20);
    sun.castShadow = true;
    scene.add(sun);

    const warmInteriorLight = new THREE.PointLight("#ffe7b8", 4.2, 68);
    warmInteriorLight.position.set(0, 9, -36);
    scene.add(warmInteriorLight);

    const silverLight = new THREE.PointLight("#ffffff", 2.8, 58);
    silverLight.position.set(0, 7, -37);
    scene.add(silverLight);

    const cyanLight = new THREE.PointLight("#82e3ef", 1.3, 34);
    cyanLight.position.set(-6, 4.5, -35);
    scene.add(cyanLight);

    const roseLight = new THREE.PointLight("#ef9bc2", 1.2, 34);
    roseLight.position.set(6, 4.5, -35);
    scene.add(roseLight);

    const amberLight = new THREE.PointLight("#ffd27f", 1.5, 36);
    amberLight.position.set(0, 4.8, -40);
    scene.add(amberLight);

    const blueLight = new THREE.PointLight("#8fa0ff", 1.0, 28);
    blueLight.position.set(-3.5, 6.5, -34);
    scene.add(blueLight);

    const crystalLight = new THREE.PointLight("#ffffff", 1.8, 32);
    crystalLight.position.set(0, 6.2, -36);
    scene.add(crystalLight);

    const goldAccentLight = new THREE.PointLight("#ffd98a", 1.8, 32);
    goldAccentLight.position.set(0, 5.8, -31);
    scene.add(goldAccentLight);

    const pearlAccentLight = new THREE.PointLight("#ffffff", 1.4, 28);
    pearlAccentLight.position.set(0, 4.2, -42);
    scene.add(pearlAccentLight);

    // ---------- MATERIALS ----------
    const plasterMaterial = new THREE.MeshStandardMaterial({
      color: "#e2d3bf",
      roughness: 0.7,
    });

    const creamMaterial = new THREE.MeshStandardMaterial({
      color: "#f7f1e7",
      roughness: 0.58,
    });

    const tileTurquoise = new THREE.MeshStandardMaterial({
      color: "#419ea6",
      roughness: 0.55,
      metalness: 0.03,
    });

    const tileGold = new THREE.MeshStandardMaterial({
      color: "#e2c36f",
      roughness: 0.38,
      metalness: 0.18,
      emissive: "#7b5f20",
      emissiveIntensity: 0.08,
    });

    const tileBlue = new THREE.MeshStandardMaterial({
      color: "#4f69ca",
      roughness: 0.48,
    });

    const woodMaterial = new THREE.MeshStandardMaterial({
      color: "#7b4928",
      roughness: 0.72,
    });

    const darkGlass = new THREE.MeshStandardMaterial({
      color: "#e7f4f7",
      roughness: 0.05,
      metalness: 0.08,
      transparent: true,
      opacity: 0.22,
      emissive: "#c7e3eb",
      emissiveIntensity: 0.05,
    });

    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: "#b0a28f",
      roughness: 0.96,
    });

    const mirrorMaterial = new THREE.MeshStandardMaterial({
      color: "#fffdf8",
      roughness: 0.01,
      metalness: 1,
      transparent: true,
      opacity: 0.9,
      emissive: "#fff6dc",
      emissiveIntensity: 0.06,
    });

    const gildedMaterial = new THREE.MeshStandardMaterial({
      color: "#e6c978",
      roughness: 0.14,
      metalness: 0.5,
      emissive: "#9a7624",
      emissiveIntensity: 0.14,
    });

    const curtainMaterial = new THREE.MeshStandardMaterial({
      color: "#c69874",
      roughness: 0.78,
    });

    const deepCurtainMaterial = new THREE.MeshStandardMaterial({
      color: "#8d4f3d",
      roughness: 0.8,
    });

    const stainedGlassCyan = new THREE.MeshStandardMaterial({
      color: "#f7f0df",
      transparent: true,
      opacity: 0.6,
      emissive: "#f1e4ba",
      emissiveIntensity: 0.12,
      metalness: 0.08,
      roughness: 0.12,
    });

    const stainedGlassAmber = new THREE.MeshStandardMaterial({
      color: "#f2e1b8",
      transparent: true,
      opacity: 0.58,
      emissive: "#e4c56e",
      emissiveIntensity: 0.15,
      metalness: 0.08,
      roughness: 0.12,
    });

    const stainedGlassRose = new THREE.MeshStandardMaterial({
      color: "#fff3de",
      transparent: true,
      opacity: 0.58,
      emissive: "#f1dca4",
      emissiveIntensity: 0.12,
      metalness: 0.08,
      roughness: 0.12,
    });

    // ---------- HELPERS ----------
    const createBox = (x, y, z, sx, sy, sz, material) => {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(sx, sy, sz),
        material
      );
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      return mesh;
    };

    const createColumn = (
      x,
      y,
      z,
      h,
      material,
      rTop = 0.25,
      rBottom = 0.31
    ) => {
      const mesh = new THREE.Mesh(
        new THREE.CylinderGeometry(rTop, rBottom, h, 24),
        material
      );
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      return mesh;
    };

    const createLitColumn = (x, y, z, h, material, glowColor = "#fff2c2") => {
      const col = createColumn(x, y, z, h, material, 0.2, 0.26);
      const glow = new THREE.PointLight(glowColor, 0.55, 8);
      glow.position.set(x, y + h * 0.35, z);
      scene.add(glow);
      return col;
    };

    const createArch = (x, y, z, radius, tube, material, ry = 0) => {
      const arch = new THREE.Mesh(
        new THREE.TorusGeometry(radius, tube, 12, 28, Math.PI),
        material
      );
      arch.rotation.z = 0;
      arch.rotation.y = ry;
      arch.position.set(x, y, z);
      arch.castShadow = true;
      arch.receiveShadow = true;
      scene.add(arch);
      return arch;
    };

    const createTree = (x, z) => {
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.35, 3.4, 12),
        new THREE.MeshStandardMaterial({ color: "#6f4d2e", roughness: 1 })
      );
      trunk.position.set(x, 1.7, z);
      scene.add(trunk);

      const crown = new THREE.Mesh(
        new THREE.ConeGeometry(1.9, 6, 16),
        new THREE.MeshStandardMaterial({ color: "#294f2f", roughness: 1 })
      );
      crown.position.set(x, 5.3, z);
      scene.add(crown);
    };

    const createLamp = (x, z) => {
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.1, 3.8, 12),
        new THREE.MeshStandardMaterial({ color: "#748170", roughness: 0.8 })
      );
      pole.position.set(x, 1.9, z);
      scene.add(pole);

      const lamp = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 16, 16),
        new THREE.MeshStandardMaterial({
          color: "#f0e7c3",
          emissive: "#7c6d38",
          emissiveIntensity: 0.28,
        })
      );
      lamp.position.set(x, 4.0, z);
      scene.add(lamp);
    };

    const createSimpleFountainJet = (x, z, scale = 1) => {
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.22 * scale,
          0.26 * scale,
          0.08 * scale,
          20
        ),
        new THREE.MeshStandardMaterial({
          color: "#e7dfd2",
          roughness: 0.8,
        })
      );
      base.position.set(x, 0.08, z);
      scene.add(base);

      const bowl1 = new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.14 * scale,
          0.22 * scale,
          0.12 * scale,
          20
        ),
        new THREE.MeshStandardMaterial({
          color: "#d9c9af",
          roughness: 0.7,
        })
      );
      bowl1.position.set(x, 0.32, z);
      scene.add(bowl1);

      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04 * scale, 0.05 * scale, 0.34 * scale, 12),
        new THREE.MeshStandardMaterial({
          color: "#d9c9af",
          roughness: 0.7,
        })
      );
      stem.position.set(x, 0.55, z);
      scene.add(stem);

      const bowl2 = new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.08 * scale,
          0.14 * scale,
          0.1 * scale,
          20
        ),
        new THREE.MeshStandardMaterial({
          color: "#e2d5bf",
          roughness: 0.7,
        })
      );
      bowl2.position.set(x, 0.78, z);
      scene.add(bowl2);

      const water = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025 * scale, 0.025 * scale, 0.9 * scale, 10),
        new THREE.MeshStandardMaterial({
          color: "#edf9ff",
          emissive: "#b5e3f1",
          emissiveIntensity: 0.3,
        })
      );
      water.position.set(x, 0.55, z);
      scene.add(water);
    };

    const addArtifactPlaque = (x, y, z, title, body) => {
      const plaque = new THREE.Mesh(
        new THREE.BoxGeometry(0.72, 0.48, 0.16),
        new THREE.MeshStandardMaterial({
          color: "#b39763",
          emissive: "#4a3517",
          emissiveIntensity: 0.08,
          metalness: 0.25,
          roughness: 0.35,
        })
      );
      plaque.position.set(x, y, z);
      plaque.userData = { kind: "artifact", title, body };
      scene.add(plaque);
      interactables.push(plaque);
    };

    const addMemoryLantern = (x, y, z) => {
      const group = new THREE.Group();

      const core = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.4, 0),
        new THREE.MeshStandardMaterial({
          color: "#d8cfa0",
          emissive: "#86611d",
          emissiveIntensity: 0.55,
          metalness: 0.15,
          roughness: 0.18,
          transparent: true,
          opacity: 0.9,
        })
      );

      const halo = new THREE.Mesh(
        new THREE.TorusGeometry(0.38, 0.03, 10, 30),
        new THREE.MeshStandardMaterial({
          color: "#f4df9c",
          emissive: "#8a6419",
          emissiveIntensity: 0.35,
          metalness: 0.25,
          roughness: 0.2,
        })
      );
      halo.rotation.x = Math.PI / 2;

      const glow = new THREE.PointLight("#f2d68a", 1.2, 8);
      glow.position.set(0, 0, 0);

      group.add(core);
      group.add(halo);
      group.add(glow);

      group.position.set(x, y, z);
      group.userData = { kind: "memory" };

      scene.add(group);
      interactables.push(group);
    };

    const createMirrorGridWall = (
      originX,
      originY,
      originZ,
      rows,
      cols,
      tileW,
      tileH,
      gap,
      rotationY = 0
    ) => {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const panel = new THREE.Mesh(
            new THREE.PlaneGeometry(tileW, tileH),
            mirrorMaterial
          );

          const y = originY + r * (tileH + gap);
          const z = originZ + c * (tileW + gap);

          panel.position.set(originX, y, z);
          panel.rotation.y = rotationY;
          panel.rotation.z = ((r + c) % 5) * 0.01;
          scene.add(panel);
        }
      }
    };

    const createBackMirrorWall = (
      centerX,
      originY,
      z,
      rows,
      cols,
      tileW,
      tileH,
      gap
    ) => {
      const totalWidth = cols * tileW + (cols - 1) * gap;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = centerX - totalWidth / 2 + c * (tileW + gap) + tileW / 2;
          const y = originY + r * (tileH + gap);

          const panel = new THREE.Mesh(
            new THREE.PlaneGeometry(tileW, tileH),
            mirrorMaterial
          );
          panel.position.set(x, y, z);
          panel.rotation.z = ((r + c) % 4) * 0.015;
          scene.add(panel);
        }
      }
    };

    const createGlassMosaicWall = (
      centerX,
      centerY,
      centerZ,
      width,
      height,
      rows,
      cols,
      baseColor = "#58c7d4"
    ) => {
      const tileW = width / cols;
      const tileH = height / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const tile = new THREE.Mesh(
            new THREE.BoxGeometry(tileW * 0.86, tileH * 0.86, 0.04),
            new THREE.MeshStandardMaterial({
              color: baseColor,
              transparent: true,
              opacity: 0.72,
              roughness: 0.14,
              metalness: 0.12,
            })
          );

          tile.position.set(
            centerX,
            centerY - height / 2 + r * tileH + tileH / 2,
            centerZ - width / 2 + c * tileW + tileW / 2
          );

          scene.add(tile);
        }
      }
    };

    const createMirrorCeilingGrid = (cx, cy, cz, width, depth, rows, cols) => {
      const tileW = width / cols;
      const tileD = depth / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const tile = new THREE.Mesh(
            new THREE.PlaneGeometry(tileW * 0.92, tileD * 0.92),
            mirrorMaterial
          );
          tile.rotation.x = -Math.PI / 2;
          tile.position.set(
            cx - width / 2 + c * tileW + tileW / 2,
            cy,
            cz - depth / 2 + r * tileD + tileD / 2
          );
          tile.rotation.z = ((r + c) % 4) * 0.03;
          scene.add(tile);
        }
      }
    };

    const createStarMirrorPanel = (
      x,
      y,
      z,
      width,
      height,
      rows,
      cols,
      rotationY = 0
    ) => {
      const group = new THREE.Group();
      const tileW = width / cols;
      const tileH = height / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = -width / 2 + c * tileW + tileW / 2;
          const cy = -height / 2 + r * tileH + tileH / 2;

          const isLarge = (r + c) % 2 === 0;
          const starSize = isLarge ? 0.32 : 0.18;

          const base = new THREE.Mesh(
            new THREE.PlaneGeometry(tileW * 0.88, tileH * 0.88),
            new THREE.MeshStandardMaterial({
              color: "#fffdf8",
              roughness: 0.01,
              metalness: 1,
              transparent: true,
              opacity: 0.88,
              emissive: "#fff3d0",
              emissiveIntensity: 0.05,
            })
          );
          base.position.set(cx, cy, 0);
          group.add(base);

          const diamondA = new THREE.Mesh(
            new THREE.PlaneGeometry(starSize, starSize),
            gildedMaterial
          );
          diamondA.rotation.z = Math.PI / 4;
          diamondA.position.set(cx, cy, 0.001);
          group.add(diamondA);

          const diamondB = new THREE.Mesh(
            new THREE.PlaneGeometry(starSize * 0.62, starSize * 0.62),
            mirrorMaterial
          );
          diamondB.rotation.z = Math.PI / 4;
          diamondB.position.set(cx, cy, 0.002);
          group.add(diamondB);
        }
      }

      group.position.set(x, y, z);
      group.rotation.y = rotationY;
      scene.add(group);
    };

    const createStarFloorField = (x, y, z, width, depth, rows, cols) => {
      const tileW = width / cols;
      const tileD = depth / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = x - width / 2 + c * tileW + tileW / 2;
          const cz = z - depth / 2 + r * tileD + tileD / 2;
          const isLarge = (r + c) % 2 === 0;
          const size = isLarge ? 0.22 : 0.14;

          const diamondA = new THREE.Mesh(
            new THREE.PlaneGeometry(size, size),
            new THREE.MeshStandardMaterial({
              color: "#d8bc67",
              roughness: 0.35,
              metalness: 0.18,
            })
          );
          diamondA.rotation.x = -Math.PI / 2;
          diamondA.rotation.z = Math.PI / 4;
          diamondA.position.set(cx, y + 0.002, cz);
          scene.add(diamondA);

          const diamondB = new THREE.Mesh(
            new THREE.PlaneGeometry(size * 0.55, size * 0.55),
            new THREE.MeshStandardMaterial({
              color: "#f4ead0",
              roughness: 0.25,
              metalness: 0.1,
            })
          );
          diamondB.rotation.x = -Math.PI / 2;
          diamondB.rotation.z = Math.PI / 4;
          diamondB.position.set(cx, y + 0.003, cz);
          scene.add(diamondB);
        }
      }
    };

    const createCurtainedWindow = (x, y, z, side = "left") => {
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 3.9, 2.1),
        woodMaterial
      );
      frame.position.set(x, y, z);
      scene.add(frame);

      const cyanPane = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 3.0, 0.55),
        stainedGlassCyan
      );
      cyanPane.position.set(x, y, z - 0.55);
      scene.add(cyanPane);

      const amberPane = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 3.0, 0.55),
        stainedGlassAmber
      );
      amberPane.position.set(x, y, z);
      scene.add(amberPane);

      const rosePane = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 3.0, 0.55),
        stainedGlassRose
      );
      rosePane.position.set(x, y, z + 0.55);
      scene.add(rosePane);

      createArch(
        x + (side === "left" ? 0.12 : -0.12),
        y + 2.15,
        z,
        1.05,
        0.08,
        gildedMaterial,
        side === "left" ? Math.PI / 2 : -Math.PI / 2
      );

      const leftCurtain = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 3.5, 0.65),
        curtainMaterial
      );
      leftCurtain.position.set(
        x + (side === "left" ? 0.22 : -0.22),
        y + 0.1,
        z - 1.0
      );
      scene.add(leftCurtain);

      const rightCurtain = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 3.5, 0.65),
        deepCurtainMaterial
      );
      rightCurtain.position.set(
        x + (side === "left" ? 0.22 : -0.22),
        y + 0.1,
        z + 1.0
      );
      scene.add(rightCurtain);

      const swag = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.45, 2.4),
        curtainMaterial
      );
      swag.position.set(
        x + (side === "left" ? 0.23 : -0.23),
        y + 1.9,
        z
      );
      scene.add(swag);

      const colorPool = new THREE.Mesh(
        new THREE.CircleGeometry(1.5, 26),
        new THREE.MeshBasicMaterial({
          color: "#d9b56a",
          transparent: true,
          opacity: 0.13,
        })
      );
      colorPool.rotation.x = -Math.PI / 2;
      colorPool.position.set(x * 0.65, 0.17, z);
      scene.add(colorPool);
    };

    const createChandelier = (x, y, z, scale = 1) => {
      const group = new THREE.Group();

      const chain = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03 * scale, 0.03 * scale, 1.6 * scale, 8),
        gildedMaterial
      );
      chain.position.y = 0;
      group.add(chain);

      const crown = new THREE.Mesh(
        new THREE.SphereGeometry(0.22 * scale, 16, 16),
        gildedMaterial
      );
      crown.position.y = -1 * scale;
      group.add(crown);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.6 * scale, 0.05 * scale, 12, 24),
        gildedMaterial
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -1.3 * scale;
      group.add(ring);

      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const drop = new THREE.Mesh(
          new THREE.ConeGeometry(0.06 * scale, 0.35 * scale, 8),
          mirrorMaterial
        );
        drop.position.set(
          Math.cos(angle) * 0.65 * scale,
          -1.45 * scale,
          Math.sin(angle) * 0.65 * scale
        );
        group.add(drop);
      }

      const lightBulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.12 * scale, 12, 12),
        new THREE.MeshStandardMaterial({
          color: "#fff0c8",
          emissive: "#ffd593",
          emissiveIntensity: 0.8,
        })
      );
      lightBulb.position.y = -1.2 * scale;
      group.add(lightBulb);

      const chandelierLight = new THREE.PointLight(
        "#ffd89c",
        1.6 * scale,
        18 * scale
      );
      chandelierLight.position.y = -1.15 * scale;
      group.add(chandelierLight);

      group.position.set(x, y, z);
      scene.add(group);
    };

    // ---------- CLICK HANDLER ----------
    const handleSceneClick = () => {
      if (!controls.isLocked) {
        controls.lock();
        return;
      }

      raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
      const hits = raycaster.intersectObjects(interactables, true);

      if (hits.length > 0) {
        let hit = hits[0].object;
        while (hit && !hit.userData?.kind) hit = hit.parent;
        if (!hit) return;

        if (hit.userData.kind === "artifact") {
          setActivePanel({
            type: "artifact",
            title: hit.userData.title,
            body: hit.userData.body,
          });
        }

        if (hit.userData.kind === "memory") {
          if (files.length === 0) {
            setActivePanel({
              type: "message",
              title: "No uploaded memories yet",
              body: "These illuminated markers will open random visitor-contributed memories from Firebase once files have been uploaded to the Golestan archive.",
            });
          } else {
            const randomFile = files[Math.floor(Math.random() * files.length)];
            setActivePanel({
              type: "memory",
              title: "Random Shared Memory",
              body: randomFile.name,
              url: randomFile.url,
            });
          }
        }
      }
    };

    renderer.domElement.addEventListener("click", handleSceneClick);

    // ---------- EXTERIOR ----------
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(240, 240),
      new THREE.MeshStandardMaterial({
        color: "#d8cfbf",
        roughness: 0.98,
      })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    const pool = new THREE.Mesh(
      new THREE.BoxGeometry(5.4, 0.18, 34),
      new THREE.MeshStandardMaterial({
        color: "#9bc5cf",
        roughness: 0.14,
        metalness: 0.08,
      })
    );
    pool.position.set(0, 0.09, 12);
    scene.add(pool);

    const leftPath = new THREE.Mesh(
      new THREE.BoxGeometry(4.4, 0.05, 38),
      new THREE.MeshStandardMaterial({
        color: "#e6ddcf",
        roughness: 1,
      })
    );
    leftPath.position.set(-4.9, 0.03, 12);
    scene.add(leftPath);

    const rightPath = new THREE.Mesh(
      new THREE.BoxGeometry(4.4, 0.05, 38),
      new THREE.MeshStandardMaterial({
        color: "#e6ddcf",
        roughness: 1,
      })
    );
    rightPath.position.set(4.9, 0.03, 12);
    scene.add(rightPath);

    createSimpleFountainJet(0, 24, 1);
    createSimpleFountainJet(0, 18.8, 1);
    createSimpleFountainJet(0, 13.6, 1);
    createSimpleFountainJet(0, 8.4, 1);
    createSimpleFountainJet(0, 3.2, 1);

    createTree(-10, 10);
    createTree(10, 10);
    createTree(-13, -4);
    createTree(13, -4);
    createLamp(-5.8, 18);
    createLamp(5.8, 18);
    createLamp(-6.2, 0);
    createLamp(6.2, 0);

    // facade masses
    createBox(0, 4.9, -18.4, 18.5, 9.8, 0.85, plasterMaterial);
    createBox(-8.7, 5.6, -17.2, 3.5, 11.2, 4.6, plasterMaterial);
    createBox(8.7, 5.6, -17.2, 3.5, 11.2, 4.6, plasterMaterial);

    // roof + upper pavilion
    createBox(0, 10.2, -17.7, 18.8, 0.55, 3.1, creamMaterial);
    createBox(0, 11.2, -17.8, 4.8, 0.8, 3.2, creamMaterial);
    createBox(
      0,
      12.2,
      -17.8,
      2.8,
      1.7,
      2.4,
      new THREE.MeshStandardMaterial({
        color: "#d8e6e8",
        transparent: true,
        opacity: 0.78,
      })
    );

    // all tile elements aligned on same facade plane
    const facadeTileZ = -18.02;
    createBox(0, 8.55, facadeTileZ, 15.2, 1.0, 0.12, tileTurquoise);
    createBox(0, 8.55, facadeTileZ + 0.01, 3.3, 0.62, 0.05, tileBlue);
    createBox(-4.5, 8.55, facadeTileZ + 0.01, 2.4, 0.58, 0.05, tileGold);
    createBox(4.5, 8.55, facadeTileZ + 0.01, 2.4, 0.58, 0.05, tileGold);

    createBox(-5.5, 5.7, facadeTileZ, 0.95, 6.2, 0.12, tileTurquoise);
    createBox(5.5, 5.7, facadeTileZ, 0.95, 6.2, 0.12, tileTurquoise);
    createBox(-7.8, 5.3, facadeTileZ, 0.8, 5.6, 0.12, tileTurquoise);
    createBox(7.8, 5.3, facadeTileZ, 0.8, 5.6, 0.12, tileTurquoise);

    // ---------- first story ----------
    [-3.2, 0, 3.2].forEach((x, i) => {
      const radius = i === 1 ? 1.35 : 0.95;
      const y = i === 1 ? 4.0 : 3.45;
      createArch(x, y, -8.45, radius, 0.12, plasterMaterial);
    });

    // side doors
    createBox(-3.2, 1.95, -8.35, 1.35, 2.7, 0.14, woodMaterial);
    createBox(-3.2, 2.05, -8.24, 0.95, 2.05, 0.07, darkGlass);

    createBox(3.2, 1.95, -8.35, 1.35, 2.7, 0.14, woodMaterial);
    createBox(3.2, 2.05, -8.24, 0.95, 2.05, 0.07, darkGlass);

    // center entry
    createBox(0, 1.95, -8.35, 2.1, 3.25, 0.16, woodMaterial);
    createBox(0, 2.05, -8.23, 1.45, 2.45, 0.07, darkGlass);

    // double-column sets, aligned with central arch sides like reference
    [-1.35, -0.95, 0.95, 1.35].forEach((x) => {
      createColumn(x, 1.95, -9.1, 3.7, creamMaterial, 0.12, 0.16);
    });

    // ---------- second story ----------
    [-3.6, 0, 3.6].forEach((x, i) => {
      const radius = i === 1 ? 1.55 : 1.05;
      const y = i === 1 ? 7.2 : 6.7;
      createArch(x, y, -18.0, radius, 0.1, gildedMaterial);
    });

    createBox(-3.6, 6.2, -17.88, 1.95, 2.95, 0.14, woodMaterial);
    createBox(-3.6, 6.2, -17.8, 1.4, 2.3, 0.06, darkGlass);

    createBox(3.6, 6.2, -17.88, 1.95, 2.95, 0.14, woodMaterial);
    createBox(3.6, 6.2, -17.8, 1.4, 2.3, 0.06, darkGlass);

    // upper central wood frame
    createBox(0, 6.35, -17.9, 3.3, 3.5, 0.16, woodMaterial);
    createBox(0, 6.35, -17.79, 2.5, 2.7, 0.06, darkGlass);
    createBox(-0.75, 6.35, -17.76, 0.08, 2.7, 0.04, gildedMaterial);
    createBox(0, 6.35, -17.76, 0.08, 2.7, 0.04, gildedMaterial);
    createBox(0.75, 6.35, -17.76, 0.08, 2.7, 0.04, gildedMaterial);

    createBox(-3.6, 8.9, facadeTileZ + 0.01, 2.5, 0.55, 0.05, tileGold);
    createBox(0, 8.95, facadeTileZ + 0.01, 3.2, 0.65, 0.05, tileBlue);
    createBox(3.6, 8.9, facadeTileZ + 0.01, 2.5, 0.55, 0.05, tileGold);

    createBox(-3.4, 3.4, -11.95, 1.25, 0.7, 0.05, tileGold);
    createBox(3.4, 3.4, -11.95, 1.25, 0.7, 0.05, tileGold);
    createBox(0, 3.25, -11.95, 1.55, 0.75, 0.05, tileTurquoise);

    createBox(-8.7, 6.1, -15.2, 1.35, 2.2, 0.14, woodMaterial);
    createBox(-8.7, 6.1, -15.1, 0.95, 1.7, 0.06, darkGlass);
    createBox(8.7, 6.1, -15.2, 1.35, 2.2, 0.14, woodMaterial);
    createBox(8.7, 6.1, -15.1, 0.95, 1.7, 0.06, darkGlass);

    addArtifactPlaque(
      -2.2,
      2.3,
      -8.0,
      "Golestan Palace Facade",
      "This coded facade emphasizes the palace’s two-story front, tiled ornament, garden axis, and the three-arch composition with a larger central opening."
    );

    addArtifactPlaque(
      2.2,
      2.3,
      -8.0,
      "Persian + Western Synthesis",
      "The facade combines Persian ornamental surfaces with a nineteenth-century vertical composition, pavilion roof form, and framed window hierarchy."
    );

    // ---------- ENTRANCE THRESHOLD / CORRIDOR ----------
    createBox(-2.2, 3.0, -17.5, 0.25, 6, 10, plasterMaterial);
    createBox(2.2, 3.0, -17.5, 0.25, 6, 10, plasterMaterial);
    createBox(0, 6.0, -17.5, 4.4, 0.25, 10, creamMaterial);

    createArch(0, 4.2, -12.0, 1.45, 0.12, gildedMaterial);

    createGlassMosaicWall(-2.05, 3.3, -17.5, 8.2, 4.8, 14, 20, "#5ecfdc");
    createGlassMosaicWall(2.05, 3.3, -17.5, 8.2, 4.8, 14, 20, "#5ecfdc");

    const corridorRunner = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.03, 8.8),
      new THREE.MeshStandardMaterial({
        color: "#6a2336",
        roughness: 0.88,
      })
    );
    corridorRunner.position.set(0, 0.18, -17.5);
    scene.add(corridorRunner);

    // ---------- INTERIOR ----------
    createBox(0, 5.8, -36, 18, 0.65, 19, creamMaterial);
    createBox(0, 0.15, -36, 18, 0.3, 19, stoneMaterial);
    createBox(-9, 3, -36, 0.6, 6, 19, plasterMaterial);
    createBox(9, 3, -36, 0.6, 6, 19, plasterMaterial);
    createBox(0, 3, -45, 18, 6, 0.6, plasterMaterial);

    createBox(-6.1, 4.15, -36, 4.8, 0.18, 16.5, creamMaterial);
    createBox(6.1, 4.15, -36, 4.8, 0.18, 16.5, creamMaterial);

    createBox(-4.15, 4.55, -36, 0.16, 0.78, 16.5, gildedMaterial);
    createBox(4.15, 4.55, -36, 0.16, 0.78, 16.5, gildedMaterial);

    for (let z = -42; z <= -30; z += 4) {
      createLitColumn(-4.15, 2.3, z, 4.6, creamMaterial, "#fff3cb");
      createLitColumn(4.15, 2.3, z, 4.6, creamMaterial, "#fff3cb");
      createArch(-4.15, 4.75, z, 0.82, 0.08, gildedMaterial, Math.PI / 2);
      createArch(4.15, 4.75, z, 0.82, 0.08, gildedMaterial, -Math.PI / 2);
    }

    const ceilingShell = new THREE.Mesh(
      new THREE.SphereGeometry(
        6.2,
        36,
        28,
        0,
        Math.PI * 2,
        0,
        Math.PI / 2.35
      ),
      new THREE.MeshStandardMaterial({
        color: "#fbf6ee",
        roughness: 0.18,
        metalness: 0.08,
        emissive: "#e8d3a0",
        emissiveIntensity: 0.12,
      })
    );
    ceilingShell.position.set(0, 5.05, -36);
    ceilingShell.scale.set(1.38, 0.58, 1.38);
    scene.add(ceilingShell);

    createBox(0, 7.45, -36, 3.6, 0.35, 3.6, creamMaterial);
    createBox(
      0,
      8.35,
      -36,
      2.25,
      1.45,
      2.25,
      new THREE.MeshStandardMaterial({
        color: "#f8f3e9",
        transparent: true,
        opacity: 0.82,
        emissive: "#f0dfb1",
        emissiveIntensity: 0.08,
      })
    );

    createMirrorGridWall(-8.67, 0.85, -43.2, 18, 28, 0.26, 0.18, 0.03, Math.PI / 2);
    createMirrorGridWall(8.67, 0.85, -43.2, 18, 28, 0.26, 0.18, 0.03, -Math.PI / 2);
    createBackMirrorWall(0, 0.85, -44.55, 18, 42, 0.26, 0.18, 0.03);
    createMirrorCeilingGrid(0, 5.45, -36, 15, 15, 38, 46);

    createStarMirrorPanel(-8.45, 3.2, -36.8, 8.2, 4.8, 10, 18, Math.PI / 2);
    createStarMirrorPanel(8.45, 3.2, -36.8, 8.2, 4.8, 10, 18, -Math.PI / 2);
    createStarMirrorPanel(0, 3.0, -44.45, 14.2, 4.8, 10, 28, 0);

    createStarMirrorPanel(0, 5.39, -31.5, 12.5, 2.2, 4, 24, 0);
    createStarMirrorPanel(0, 5.39, -40.5, 12.5, 2.2, 4, 24, 0);
    createStarMirrorPanel(0, 5.39, -36.0, 8.5, 1.8, 3, 16, 0);

    createBox(0, 5.7, -36, 17.2, 0.18, 17.8, gildedMaterial);
    createBox(0, 0.5, -36, 17.2, 0.14, 17.8, gildedMaterial);
    createBox(0, 4.9, -44.55, 17.2, 0.16, 0.18, gildedMaterial);

    createCurtainedWindow(-8.55, 2.75, -40, "left");
    createCurtainedWindow(-8.55, 2.75, -34, "left");
    createCurtainedWindow(8.55, 2.75, -40, "right");
    createCurtainedWindow(8.55, 2.75, -34, "right");

    const carpet = new THREE.Mesh(
      new THREE.BoxGeometry(8.2, 0.05, 8.8),
      new THREE.MeshStandardMaterial({
        color: "#6d2233",
        roughness: 0.88,
      })
    );
    carpet.position.set(0, 0.18, -36.3);
    scene.add(carpet);

    createStarFloorField(0, 0.165, -28.5, 6.8, 3.6, 5, 10);
    createStarFloorField(-5.2, 0.165, -36.2, 2.8, 4.2, 6, 4);
    createStarFloorField(5.2, 0.165, -36.2, 2.8, 4.2, 6, 4);
    createStarFloorField(0, 0.165, -41.5, 5.5, 2.6, 4, 8);

    const centerTable = new THREE.Mesh(
      new THREE.CylinderGeometry(1.05, 1.15, 0.42, 8),
      new THREE.MeshStandardMaterial({
        color: "#8b5a3b",
        roughness: 0.65,
      })
    );
    centerTable.position.set(0, 0.45, -36);
    scene.add(centerTable);

    const sofaMaterial = new THREE.MeshStandardMaterial({
      color: "#6e7a44",
      roughness: 0.72,
    });

    createBox(0, 1.0, -39.7, 3.2, 0.85, 0.9, sofaMaterial);
    createBox(0, 1.45, -40.0, 3.2, 0.75, 0.25, sofaMaterial);

    const chairColor = new THREE.MeshStandardMaterial({
      color: "#c69b72",
      roughness: 0.68,
    });

    createBox(-4.6, 0.95, -36, 0.9, 0.75, 0.9, chairColor);
    createBox(-4.6, 1.35, -36.25, 0.9, 0.65, 0.2, chairColor);

    createBox(4.6, 0.95, -36, 0.9, 0.75, 0.9, chairColor);
    createBox(4.6, 1.35, -36.25, 0.9, 0.65, 0.2, chairColor);

    createChandelier(0, 6.9, -36, 1.4);
    createChandelier(-4.8, 6.4, -34.5, 0.95);
    createChandelier(4.8, 6.4, -34.5, 0.95);
    createChandelier(-4.8, 6.4, -39.8, 0.95);
    createChandelier(4.8, 6.4, -39.8, 0.95);

    const clerestoryMats = [
      stainedGlassCyan,
      stainedGlassAmber,
      stainedGlassRose,
      stainedGlassCyan,
      stainedGlassAmber,
    ];

    clerestoryMats.forEach((mat, i) => {
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(1.08, 0.78, 0.08),
        mat
      );
      panel.position.set(-2.4 + i * 1.2, 8.15, -27.2);
      scene.add(panel);
    });

    addArtifactPlaque(
      -1.7,
      1.2,
      -38.0,
      "Mirror Hall Atmosphere",
      "This coded hall emphasizes mirror-work, chandelier light, reflective ceilings, and salon-like furnishing to evoke the dazzling brilliance associated with Golestan’s celebrated interiors."
    );

    addArtifactPlaque(
      1.7,
      1.2,
      -38.0,
      "Persian + Western Interior Language",
      "Arches, ornamental surfaces, and luminous walls are combined with draped tall windows, formal seating arrangements, and reception-room spatiality associated with nineteenth-century Western-influenced court interiors."
    );

    addMemoryLantern(-2.8, 1.2, -31);
    addMemoryLantern(2.8, 1.2, -31);
    addMemoryLantern(0, 1.55, -36);
    addMemoryLantern(-5.6, 3.2, -39);
    addMemoryLantern(5.6, 3.2, -39);

    // ---------- MOVEMENT ----------
    const keys = {};
    const speed = 0.14;

    const onKeyDown = (event) => {
      keys[event.code] = true;
    };

    const onKeyUp = (event) => {
      keys[event.code] = false;
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (controls.isLocked) {
        if (keys["KeyW"]) controls.moveForward(speed);
        if (keys["KeyS"]) controls.moveForward(-speed);
        if (keys["KeyA"]) controls.moveRight(-speed);
        if (keys["KeyD"]) controls.moveRight(speed);

        camera.position.x = THREE.MathUtils.clamp(camera.position.x, -8.2, 8.2);
        camera.position.z = THREE.MathUtils.clamp(camera.position.z, -44, 28);
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      renderer.domElement.removeEventListener("click", handleSceneClick);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("resize", handleResize);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, [files]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

      <div style={overlayStyle}>
        <h2 style={walkthroughTitleStyle}>Golestan Palace Walkthrough</h2>
        <p style={walkthroughBodyStyle}>
            Click once to enter the scene. Use W A S D to move. Aim the center
            crosshair at a plaque or lantern and click to open it. Press Esc to
            unlock your cursor.
        </p>
        <button onClick={onExit} style={buttonStyle}>
            Return to Archive
        </button>
        </div>

      <div style={crosshairStyle}>+</div>

      {activePanel && (
        <div style={panelStyle}>
            <h3 style={panelTitleStyle}>{activePanel.title}</h3>
            <p style={panelBodyStyle}>{activePanel.body}</p>

          <div style={{ textAlign: "center", marginTop: "12px" }}>
            {activePanel.type === "memory" && activePanel.url && (
              <a
                href={activePanel.url}
                target="_blank"
                rel="noreferrer"
                style={panelLinkStyle}
              >
                Open memory file
              </a>
            )}

            <div>
              <button style={buttonStyle} onClick={() => setActivePanel(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const overlayStyle = {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "16px",
    background: "rgba(247, 243, 236, 0.9)",
    border: "1px solid #3a3328",
    maxWidth: "340px",
    fontFamily: "Georgia, serif",
    zIndex: 10,
  };

const crosshairStyle = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontSize: "22px",
  pointerEvents: "none",
  zIndex: 5,
  textShadow: "0 0 6px rgba(0,0,0,0.8)",
};

const panelStyle = {
  position: "absolute",
  right: "20px",
  top: "20px",
  width: "320px",
  padding: "18px",
  background: "rgba(255, 250, 240, 0.96)",
  border: "1px solid #3a3328",
  fontFamily: "Georgia, serif",
  zIndex: 20,
};

const panelLinkStyle = {
  display: "inline-block",
  marginBottom: "12px",
  color: "#7a3f20",
  textDecoration: "underline",
};

const buttonStyle = {
  marginTop: "8px",
  padding: "8px 12px",
  border: "1px solid #3a3328",
  background: "#3a3328",
  color: "white",
  cursor: "pointer",
};

const walkthroughTitleStyle = {
    fontFamily: TITLE_FONT,
    fontWeight: 600,
    fontSize: "26px",
    marginTop: 0,
    marginBottom: "10px",
    color: "#1f1f1f",
  };
  
  const walkthroughBodyStyle = {
    fontFamily: TITLE_FONT,
    fontSize: "20px",
    lineHeight: 1.55,
    color: "#7f8298",
    marginTop: 0,
    marginBottom: "10px",
  };
  
  const panelTitleStyle = {
    fontFamily: TITLE_FONT,
    fontWeight: 600,
    fontSize: "28px",
    marginTop: 0,
    marginBottom: "12px",
    color: "#1f1f1f",
  };
  
  const panelBodyStyle = {
    fontFamily: TITLE_FONT,
    fontSize: "20px",
    lineHeight: 1.6,
    color: "#5d5d6f",
    marginTop: 0,
    marginBottom: "8px",
  };
  
export default Walkthrough;