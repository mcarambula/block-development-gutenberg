<?php
// This file is generated. Do not modify it manually.
return array(
	'clickyButton' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/clicky-button',
		'version' => '0.1.0',
		'title' => 'Clicky Button',
		'category' => 'blockylicious',
		'icon' => 'smiley',
		'description' => 'A clicky button.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'padding' => true
			)
		),
		'attributes' => array(
			'postType' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkedPost' => array(
				'type' => 'number'
			),
			'labelText' => array(
				'type' => 'string',
				'default' => 'Button'
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
					'spacing' => array(
						'padding' => array(
							'top' => '10px',
							'right' => '15px',
							'bottom' => '10px',
							'left' => '15px'
						)
					)
				)
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#503AA8'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'hoverColor' => array(
				'type' => 'string',
				'default' => '#412a9d'
			),
			'hoverTextColor' => array(
				'type' => 'string',
				'default' => '#fff'
			)
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'parent' => array(
			'blockylicious/clicky-group'
		)
	),
	'clickyGroup' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/clicky-group',
		'version' => '0.1.0',
		'title' => 'Clicky Group',
		'category' => 'blockylicious',
		'icon' => 'smiley',
		'description' => 'A group of clicky buttons.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'blockGap' => true,
				'margin' => true
			)
		),
		'attributes' => array(
			'justifyContent' => array(
				'type' => 'string',
				'enum' => array(
					'left',
					'center',
					'right'
				),
				'default' => 'center'
			)
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'curvy' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/curvy',
		'version' => '0.1.0',
		'title' => 'Curvy',
		'category' => 'blockylicious',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			'innerBlocks' => array(
				array(
					'name' => 'core/heading',
					'attributes' => array(
						'content' => 'Lorem Ipsum.'
					)
				),
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'This is an example of a curvy block.'
					)
				)
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'link' => true
			),
			'spacing' => array(
				'padding' => true
			)
		),
		'variations' => array(
			array(
				'name' => 'top-only',
				'title' => 'Curvy Top Only',
				'attributes' => array(
					'enableTopCurve' => true,
					'enableBottomCurve' => false
				)
			),
			array(
				'name' => 'bottom-only',
				'title' => 'Curvy Bottom Only',
				'attributes' => array(
					'enableTopCurve' => false,
					'enableBottomCurve' => true
				)
			)
		),
		'attributes' => array(
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'text' => 'black',
						'link' => 'blue'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '80px',
							'bottom' => '80px',
							'left' => '50px',
							'right' => '50px'
						)
					)
				)
			),
			'enableTopCurve' => array(
				'type' => 'boolean',
				'default' => true
			),
			'width' => array(
				'type' => 'number',
				'default' => 100
			),
			'height' => array(
				'type' => 'number',
				'default' => 100
			),
			'flipX' => array(
				'type' => 'boolean',
				'default' => false
			),
			'flipY' => array(
				'type' => 'boolean',
				'default' => false
			),
			'color' => array(
				'type' => 'object',
				'default' => array(
					'background' => '#fff'
				)
			),
			'enableBottomCurve' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottomWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'bottomHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'bottomFlipX' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottomFlipY' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottomColor' => array(
				'type' => 'object',
				'default' => array(
					'background' => '#fff'
				)
			)
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	),
	'piccyGallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/piccy-gallery',
		'version' => '0.1.0',
		'title' => 'Piccy Gallery',
		'category' => 'blockylicious',
		'icon' => 'images-alt2',
		'description' => 'An interactive gallery of images.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'piccyImage' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/piccy-image',
		'version' => '0.1.0',
		'title' => 'Piccy Image',
		'category' => 'blockylicious',
		'icon' => 'format-image',
		'description' => 'An image to render within the Piccy Gallery',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'imageId' => array(
				'type' => 'number'
			)
		),
		'textdomain' => 'blockylicious',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'parent' => array(
			'blockylicious/piccy-gallery'
		)
	)
);
