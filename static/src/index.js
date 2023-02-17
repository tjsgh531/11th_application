import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {

  const FogColor = 0x004fff;
  const BackgroundColor = 0x000000;
  const particlesCnt = 5000;
  let default_camera_pos = 0;

  /*
  window.addEventListener('click', ()=>{
    window.alert("wait");
  });
  */
 
  //장면 
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BackgroundColor);
  scene.fog = new THREE.FogExp2(FogColor, 0.7, 1.4, 2);

  
  //카메라(1.5 ~ -1.5)
  const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.001, 1.5);
  //const cmhelper = new THREE.CameraHelper(camera);

  camera.position.set(0, 0, 1);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);
  //scene.add(cmhelper);

  //마우스 이벤트
  //마우스 위치에 따라 하자
  let speed = 0.004;
  
  window.addEventListener('mousemove',(e)=>{
    
    //speed = 0.005*(Math.abs(sizes.width/2 - e.clientX) / (sizes.width/2) + Math.abs(sizes.height/2 - e.clientY) / (sizes.height / 2));
    speed = 0.008* (Math.abs(sizes.width/2 - e.clientX) / (sizes.width/2));

    if(speed <= 0.004) speed = 0.004;
  });


  // 랜더러
  const canvas = document.getElementById('c');
  const renderer = new THREE.WebGLRenderer({
    alpha : true,
    antialias : true,
    canvas : canvas,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


  // 빛
  const pointLight = new THREE.PointLight(0xffffff, 0.1);
  pointLight.position.x = 2;
  pointLight.position.x = 3;
  pointLight.position.x = 4;
  scene.add(pointLight);

  
  /* 오브젝트 */
    // geometry
    const geometry = new THREE.BufferGeometry;

    const posArray = new Float32Array(particlesCnt * 3);

    for(let i = 0 ; i < particlesCnt * 3; i++){
      posArray[i] = (Math.random()-0.5) * (Math.random() * 4);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // material
    const material = new THREE.PointsMaterial({
      size: 0.0055,
    });

    // Mesh
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);


  // 애니메이션
  function animate(){
    requestAnimationFrame(animate);
    camera.position.z = 1.2 * Math.cos(-default_camera_pos*1.5);
    camera.position.x =  Math.cos(default_camera_pos);
    camera.position.y =  Math.sin(default_camera_pos); 
    default_camera_pos += speed;

    camera.lookAt(new THREE.Vector3(0,0,0));
    renderer.render(scene, camera);
  }
  animate();

  
  // 리사이징
  const sizes = {
    width: window.innerWidth,
    height : window.innerHeight,
  }

  const wrap = document.querySelector('.wrap');
  window.addEventListener('resize', ()=>{
    //Update size
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //update Elements
    wrap.style.width = `${sizes.width}px`;
    wrap.style.height = `${sizes.height}px`;

    // UPdate camerea
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Update MouseEvent
    mouseEvent.resizing(sizes.width, sizes.height);
  });

} else {
  var warning = WEBGL.getWebGLErrorMessage();
  document.body.appendChild(warning);
}
