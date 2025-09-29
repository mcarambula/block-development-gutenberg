<?php
// This file is generated. Do not modify it manually.
return array(
	'curvy' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockylicious/curvy',
		'version' => '0.1.0',
		'title' => 'Blockylicious',
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
						'background' => '#ec4899',
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
	)
);
