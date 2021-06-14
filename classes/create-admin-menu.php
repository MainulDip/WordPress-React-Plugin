<?php
// Create Admin Class

class Create_Admin_menu
{
    public function __construct()
    {
        add_action('admin_menu', [$this, 'create_admin_menu']);
    }

    public function create_admin_menu()
    {
        $capability = 'manage_options';
        $slug = 'wordpress-react-settings';

        add_menu_page(
            __('WordPress React Integration', 'wp-react'),
            __('WordPress React Integration', 'wp-react'),
            $capability,
            $slug,
            [$this, 'menu_page_template'],
            'dashicons-shield',
            null
        );
    }

    public function menu_page_template()
    {
        echo '<div class="wrap"><div id="wr-admin-app"></div></div>';
    }
}

new Create_Admin_menu();
