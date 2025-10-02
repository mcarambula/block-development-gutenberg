<?php
/**
 * Block Pattern: Call to Action
 *
 * @package Blockylicious
 */

namespace BlockyliciousModop\Patterns;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Register the call-to-action block pattern.
 *
 * @return void
 */
function register_call_to_action_pattern() 
{
    register_block_pattern(
        'blockylicious/call-to-action',
        [
            'categories' => ['call-to-action', 'blockylicious'],
            'title'      => __('Blockylicious Call to Action', 'blockylicious'),
            'description' => __('A heading, paragraph, and clicky button', 'blockylicious'),
            'content'    => '<!-- wp:heading {"textAlign":"center","level":1} -->
                            <h1 class="wp-block-heading has-text-align-center">Lorem ipsum</h1>
                            <!-- /wp:heading -->

                            <!-- wp:paragraph {"align":"center"} -->
                            <p class="has-text-align-center">Nam tempor finibus lorem, nec varius arcu convallis sed. Nunc id orci a neque vehicula malesuada. Donec vehicula libero vel leo convallis, nec tincidunt felis tincidunt.</p>
                            <!-- /wp:paragraph -->

                            <!-- wp:blockylicious/clicky-group -->
                            <!-- wp:blockylicious/clicky-button {"labelText":"Call to action","style":{"spacing":{"padding":{"top":"var:preset|spacing|20","right":"37px","bottom":"var:preset|spacing|20","left":"37px"}}}} /-->
                            <!-- /wp:blockylicious/clicky-group -->

                            <!-- wp:paragraph -->
                            <p></p>
                            <!-- /wp:paragraph -->',
        ]
    );
}
