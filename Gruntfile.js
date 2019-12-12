(function(){
    "use strict";
    module.exports = (grunt)=> {
        const sass = require('node-sass');
        // require('load-grunt-tasks')(grunt);
        //Configuration
        grunt.initConfig({
            // sass: {
            //     build:{
            //         files:[{
            //             src:'./src/index.scss',
            //             dest: './src/index.css'
            //         }]
            //     }
            // }
            sass: {
                options: {
                    implementation: sass,
                    sourceMap: true
                },
                dist: {
                    files: {
                        './src/index.css': './src/index.scss'
                    }
                }
            }
        })

        //Load plugns
        grunt.loadNpmTasks('grunt-sass');

        //Register Tasks
        grunt.registerTask('run', ()=>{
            console.log('Task running')
        } );
        grunt.registerTask('default', ['sass']);
    }
}())