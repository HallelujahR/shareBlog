<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS
    |--------------------------------------------------------------------------
    |
    | allowedOrigins, allowedHeaders and allowedMethods can be set to array('*')
    | to accept any value.
    |
    */
   
    'supportsCredentials' => false,
    'allowedOrigins' => ['http://www.blog.com:8080','192.168.5.35:8080'],
    'allowedHeaders' => ['Content-Type', 'X-Requested-With','Authorization','Access-Control-Allow-Methods','Access-Control-Allow-Headers'],
    'allowedMethods' => ['GET', 'POST', 'PUT', 'DELETE'], // ex: ['GET', 'POST', 'PUT',  'DELETE']
    'exposedHeaders' => [],
    'maxAge' => 0,
];
