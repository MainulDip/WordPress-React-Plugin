<?php

class WR_react_settings_route
{
    public function __construct()
    {
        add_action('rest_api_init', [$this, 'create_rest_routes']);
    }


    public function create_rest_routes()
    {
        register_rest_route('wreactapp/v1', '/settings', [
            'methods' => 'GET',
            'callback' => [$this, 'get_settings'],
            'permission_callback' => [$this, 'get_settings_permission']
        ]);

        register_rest_route('wreactapp/v1', '/settings', [
            'methods' => 'POST',
            'callback' => [$this, 'save_settings'],
            'permission_callback' => [$this, 'save_settings_permission']
        ]);
    }

    public function get_settings()
    {

        $firstname = get_option('wr-admin-settings-firstname');
        $lastname = get_option('wr-admin-settings-lastname');
        $email = get_option('wr-admin-settings-email');

        $response = [
            'firstname' => $firstname,
            'lastname' => $lastname,
            'email' => $email
        ];

        return rest_ensure_response($response);
    }

    public function get_settings_permission()
    {
        return true;
    }

    public function save_settings($req)
    {
        $firstname = sanitize_text_field($req['firstname']);
        $lastname = sanitize_text_field($req['lastname']);
        $email = sanitize_text_field($req['email']);

        if (
            update_option('wr-admin-settings-firstname', $firstname) === true ||
            update_option('wr-admin-settings-lastname', $lastname) === true ||
            update_option('wr-admin-settings-email', $email) === true
        ) {
            return rest_ensure_response('success');
        } else {
            return rest_ensure_response('value already exists');
        }
    }

    public function save_settings_permission()
    {
        return current_user_can('publish_posts');
    }
}

new WR_react_settings_route();
