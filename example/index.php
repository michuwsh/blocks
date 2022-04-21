<?php 

function register_example_block() {
    wp_register_script(
        'example-block-js',
        get_stylesheet_directory_uri() . '/blocks/example/build/index.js',
        array(
            'wp-blocks', 
            'wp-i18n', 
            'wp-editor' 
        ),
        true
    );

    wp_register_style(
        'example-block-style',
        get_stylesheet_directory_uri() . '/blocks/example/build/index.css',
    );

    register_block_type( 'blocks/example', array(
        'editor_script' => 'example-block-js',
        'editor_style' => 'example-block-style',
        'style' => 'example-block-style'
    ));
}

add_action( 'init', 'register_example_block' );