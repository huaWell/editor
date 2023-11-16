import * as THREE from 'three';

import { UIPanel, UIRow, UIHorizontalRule, UIBreak } from './libs/ui.js';

import { AddObjectCommand } from './commands/AddObjectCommand.js';
import { AddScriptCommand } from './commands/AddScriptCommand.js';

function MenubarAdd( editor ) {

	const strings = editor.strings;

	const container = new UIPanel();
	container.setClass( 'menu' );

	const title = new UIPanel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/add' ) );
	container.add( title );

	const options = new UIPanel();
	options.setClass( 'options' );
	container.add( options );

	// Group

	let option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/group' ) );
	option.onClick( function () {

		const mesh = new THREE.Group();
		mesh.name = 'Group';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	//

	options.add( new UIHorizontalRule() );

	// Box

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/box' ) );
	option.onClick( function () {

		const geometry = new THREE.BoxGeometry( 1, 1, 1, 1, 1, 1 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Box';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Capsule

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/capsule' ) );
	option.onClick( function () {

		const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
		const material = new THREE.MeshStandardMaterial();
		const mesh = new THREE.Mesh( geometry, material );
		mesh.name = 'Capsule';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Circle

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/circle' ) );
	option.onClick( function () {

		const geometry = new THREE.CircleGeometry( 1, 32, 0, Math.PI * 2 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Circle';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Cylinder

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/cylinder' ) );
	option.onClick( function () {

		const geometry = new THREE.CylinderGeometry( 1, 1, 1, 32, 1, false, 0, Math.PI * 2 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Cylinder';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Dodecahedron

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/dodecahedron' ) );
	option.onClick( function () {

		const geometry = new THREE.DodecahedronGeometry( 1, 0 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Dodecahedron';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Icosahedron

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/icosahedron' ) );
	option.onClick( function () {

		const geometry = new THREE.IcosahedronGeometry( 1, 0 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Icosahedron';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Lathe

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/lathe' ) );
	option.onClick( function () {

		const geometry = new THREE.LatheGeometry();
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial( { side: THREE.DoubleSide } ) );
		mesh.name = 'Lathe';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Octahedron

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/octahedron' ) );
	option.onClick( function () {

		const geometry = new THREE.OctahedronGeometry( 1, 0 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Octahedron';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Plane

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/plane' ) );
	option.onClick( function () {

		const geometry = new THREE.PlaneGeometry( 1, 1, 1, 1 );
		const material = new THREE.MeshStandardMaterial();
		const mesh = new THREE.Mesh( geometry, material );
		mesh.name = 'Plane';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Ring

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/ring' ) );
	option.onClick( function () {

		const geometry = new THREE.RingGeometry( 0.5, 1, 32, 1, 0, Math.PI * 2 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Ring';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Sphere

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/sphere' ) );
	option.onClick( function () {

		const geometry = new THREE.SphereGeometry( 1, 32, 16, 0, Math.PI * 2, 0, Math.PI );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Sphere';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Sprite

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/sprite' ) );
	option.onClick( function () {

		const sprite = new THREE.Sprite( new THREE.SpriteMaterial() );
		sprite.name = 'Sprite';

		editor.execute( new AddObjectCommand( editor, sprite ) );

	} );
	options.add( option );

	// Tetrahedron

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/tetrahedron' ) );
	option.onClick( function () {

		const geometry = new THREE.TetrahedronGeometry( 1, 0 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Tetrahedron';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Torus

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/torus' ) );
	option.onClick( function () {

		const geometry = new THREE.TorusGeometry( 1, 0.4, 12, 48, Math.PI * 2 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Torus';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// TorusKnot

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/torusknot' ) );
	option.onClick( function () {

		const geometry = new THREE.TorusKnotGeometry( 1, 0.4, 64, 8, 2, 3 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'TorusKnot';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	// Tube

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/tube' ) );
	option.onClick( function () {

		const path = new THREE.CatmullRomCurve3( [
			new THREE.Vector3( 2, 2, - 2 ),
			new THREE.Vector3( 2, - 2, - 0.6666666666666667 ),
			new THREE.Vector3( - 2, - 2, 0.6666666666666667 ),
			new THREE.Vector3( - 2, 2, 2 )
		] );

		const geometry = new THREE.TubeGeometry( path, 64, 1, 8, false );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Tube';

		editor.execute( new AddObjectCommand( editor, mesh ) );

	} );
	options.add( option );

	//

	options.add( new UIHorizontalRule() );

	// AmbientLight

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/ambientlight' ) );
	option.onClick( function () {

		const color = 0x222222;

		const light = new THREE.AmbientLight( color );
		light.name = 'AmbientLight';

		editor.execute( new AddObjectCommand( editor, light ) );

	} );
	options.add( option );

	// DirectionalLight

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/directionallight' ) );
	option.onClick( function () {

		const color = 0xffffff;
		const intensity = 1;

		const light = new THREE.DirectionalLight( color, intensity );
		light.name = 'DirectionalLight';
		light.target.name = 'DirectionalLight Target';

		light.position.set( 5, 10, 7.5 );

		editor.execute( new AddObjectCommand( editor, light ) );

	} );
	options.add( option );

	// HemisphereLight

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/hemispherelight' ) );
	option.onClick( function () {

		const skyColor = 0x00aaff;
		const groundColor = 0xffaa00;
		const intensity = 1;

		const light = new THREE.HemisphereLight( skyColor, groundColor, intensity );
		light.name = 'HemisphereLight';

		light.position.set( 0, 10, 0 );

		editor.execute( new AddObjectCommand( editor, light ) );

	} );
	options.add( option );

	// PointLight

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/pointlight' ) );
	option.onClick( function () {

		const color = 0xffffff;
		const intensity = 1;
		const distance = 0;

		const light = new THREE.PointLight( color, intensity, distance );
		light.name = 'PointLight';

		editor.execute( new AddObjectCommand( editor, light ) );

	} );
	options.add( option );

	// SpotLight

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/spotlight' ) );
	option.onClick( function () {

		const color = 0xffffff;
		const intensity = 1;
		const distance = 0;
		const angle = Math.PI * 0.1;
		const penumbra = 0;

		const light = new THREE.SpotLight( color, intensity, distance, angle, penumbra );
		light.name = 'SpotLight';
		light.target.name = 'SpotLight Target';

		light.position.set( 5, 10, 7.5 );

		editor.execute( new AddObjectCommand( editor, light ) );

	} );
	options.add( option );

	//

	options.add( new UIHorizontalRule() );

	// OrthographicCamera

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/orthographiccamera' ) );
	option.onClick( function () {

		const aspect = editor.camera.aspect;
		const camera = new THREE.OrthographicCamera( - aspect, aspect );
		camera.name = 'OrthographicCamera';

		editor.execute( new AddObjectCommand( editor, camera ) );

	} );
	options.add( option );

	// PerspectiveCamera

	option = new UIRow();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/add/perspectivecamera' ) );
	option.onClick( function () {

		const camera = new THREE.PerspectiveCamera();
		camera.name = 'PerspectiveCamera';

		editor.execute( new AddObjectCommand( editor, camera ) );

	} );
	options.add( option );

	// 特效
	options.add( new UIHorizontalRule() );

	option = new UIRow();
	option.setClass('option');
	option.setTextContent("粒子特效");
	option.onClick(function(){
		var geom = new THREE.BufferGeometry();
		var texture = new THREE.TextureLoader().load('/editor/images/snow.png');
		var sMat = new THREE.SpriteMaterial({
			map: texture,
			transparent: true,
			opacity: 0.5
		})

		var material = new THREE.PointsMaterial({
			size: 10,
			transparent: true,
			blending:THREE.AdditiveBlending,	// 融合模式
			//opacity: 0.6,
			// vertexColors: true,
			// color: 0xffffff,
			//sizeAttenuation: true,
			map: texture,
			depthTest: false    // 设置解决透明度有问题的情况
		})
		
		const drops = 20000;	// 雨滴数量
		const raindropSpeed = 5;	// 雨滴下落速度

		// 定义顶点数据
		const positions = new Float32Array(drops*3);
		const velocities = new Float32Array(drops*3);

		for (var i = 0; i < drops; i++) {
			positions[i*3] = (Math.random() - 0.5) * 8000;	// x
			positions[i*3 + 1] = Math.random() * 5000;	// y
			positions[i*3 + 2] = (Math.random() - 0.5) * 16000;	// z
			// 雨滴位移速度
			velocities[i*3] = 0; 	// x
			velocities[i*3+1] = -raindropSpeed;	// y
			velocities[i*3+2] = 0;	// z
		}
	
		// 将位置数组设置为 geometry 的 attribute  
		geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		geom.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

		var snow = new THREE.Points(geom, material);
		geom.attributes.position.needsUpdate = true;
		snow.name = 'ParticleEffect';

		editor.execute(new AddObjectCommand(editor, snow))

		// 直接绑定动画, 动画后期做成库
		const script = {name: 'rainDown', source: `
			var original = this.getObjectByName( 'ParticleEffect' );
			function update( event ) {
				const positions = original.geometry.attributes.position.array;
				const velocities = original.geometry.attributes.velocity.array;
				for(let i = 0; i < 20000; ++i) {
					// 更新雨滴位置
					positions[i*3] += velocities[i*3];	// x
					positions[i*3 + 1] += velocities[i*3+1];	// y
					positions[i*3 + 2] += velocities[i*3+2];	// z
					// 如果雨滴落到了地面, 重新回到顶部
					if (positions[i*3+1] < -1500) {
						positions[i*3] = (Math.random() - 0.5)*8000;	//x
						positions[i*3 + 1] = Math.random() * 5000;	// y
						positions[i*3 + 2] = (Math.random() - 0.5) * 16000;	// z
					}
				}
				original.geometry.attributes.position.needsUpdate = true;
			}
		`}
		editor.execute(new AddScriptCommand(editor, editor.selected, script));
	})

	options.add(option);


	// ui组件
	options.add( new UIHorizontalRule() );

	option = new UIRow();
	option.setClass('option');
	option.setTextContent("ui组件-BI图");
	option.onClick(function(){
		// create chart
		var canvas = document.createElement("canvas")
		document.body.appendChild(canvas);
		var ctx = canvas.getContext("2d");
		ctx.canvas.width = 512;
		ctx.canvas.height = 256;
		// canvas.style.width = "512px";
		// canvas.style.height = "256px"
		//ctx.fillStyle = 'rgba(255,255,255)';
		
		// ctx.font = "Bold 100px Arial";
		// ctx.lineWidth = 4;
		// ctx.fillText("ABCDE",4,104);

		var chartData = {
			labels: ["A", "B", "C", "D", "E"],
			datasets: [{
			  label: "Data",
			  data: [10, 20, 30, 40, 50],
			  borderColor: "blue",
			  fill: false,
			}]
		};
		  
		var chartOptions = {
			responsive: true,
			maintainAspectRatio: false,
		};

		var lineChart = new Chart(ctx, {
			type: "line",
			data: chartData,
			options: chartOptions,
		});
		lineChart.name = "lineChart";

		var spriteTexture = new THREE.CanvasTexture(ctx.canvas);
		spriteTexture.name = "SpriteTexture";

		var spriteMaterial = new THREE.SpriteMaterial({
			map: spriteTexture,
			//color: '#fff',
			transparent: true,
			blending: THREE.AdditiveBlending,
			depthTest: false,
			side: THREE.DoubleSide
			//alphaTest: 0.01
		});
		spriteTexture.needsUpdate = true;
		//spriteTexture.map.needsUpdate = true;
		//spriteTexture.map.premultiplyAlpha = false;
		spriteTexture.premultiplyAlpha = false;

		var sprite = new THREE.Sprite(spriteMaterial);
		// sprite.userData = {
		// 	"lineChart": lineChart,
		// 	"texture": spriteTexture
		// }
		sprite._lineChart = lineChart;
		sprite._texture = spriteTexture;
		sprite.scale.set(48, 24, 1);
		//sprite.position.set(0,0,98);

		sprite.name = "SpriteLineChart";
		
		editor.execute(new AddObjectCommand(editor, sprite));

		const script =  {name: 'lineChartMonitor', source: `
			var original = this.getObjectByName( 'SpriteLineChart' );
			var texture = this.getObjectByName( 'SpriteTexture' );
			function update( event ) {
				console.log(original);
				// original._lineChart.data.datasets[0].data = [15,25,35,45,55];
				// original._lineChart.update();
				// original._texture.needsUpdate = true;
			}
		`}
		editor.execute(new AddScriptCommand(editor, editor.selected, script));
	})

	options.add(option);

	return container;
}

export { MenubarAdd };
