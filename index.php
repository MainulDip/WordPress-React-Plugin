<?php
/*
Plugin Name: WordPress React Admin
Plugin URI: https://github.com/mainuldip
Description: React Integration With WordPress
Version: 1.0.0
Requires at least: 5.2
Requires PHP: 7.2
Author: Mainul Dip
Author URI: https://github.com/mainuldip
License: GPL v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: wp-react
Domain Path: /languages

*/


if (!defined('ABSPATH')) exit(); // Stop Direct Access

// Define Plugin Contants

define('WR_PATH', trailingslashit(plugin_dir_path(__FILE__)));
define('WR_URL', trailingslashit(plugin_dir_url(__FILE__)));

// Loading Necessery Scripts
add_action('admin_enqueue_scripts', 'load_scripts');

function load_scripts()
{
    wp_enqueue_script('wp-react-init', WR_URL . 'dist/bundle.js', [], '1.0.0', true);
    wp_localize_script('wp-react-init', 'appLocalizer', [
        'apiUrl' => home_url('/wp-json'),
        'nonce' => wp_create_nonce('wp-rest')
    ]);
}


require_once WR_PATH . 'classes/create-admin-menu.php';
require_once WR_PATH . 'classes/create-router-settngs.php';
