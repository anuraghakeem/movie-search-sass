(function(){
    "use strict";
    module.exports = (grunt)=> {
        const sass = require('node-sass');
        //Configuration
        grunt.initConfig({
            concat: {
                options: {
                  separator: ';',
                },
                dist: {
                  src: ['src/components/App.js','src/components/Header.js','src/components/Search.js'],
                  dest: 'dist/built.js',
                },
              },          
            sass: {
                options: {
                    implementation: sass,
                    sourceMap: true
                },
                dist: {
                    files: {
                        // dest : src
                        './src/index.css': './src/index.scss'
                    }
                }
            },
            uglify: {
                my_target: {
                  files: {
                    'dist/built.min.js': 'dist/built.js'
                  }
                }
              }
        })

        //Load plugins
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-sass');
        // grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-uglify');


        //Register Tasks
        grunt.registerTask('run', ()=>{
            console.log('Task running')
        } );
        grunt.registerTask('default', ['sass']);
        grunt.registerTask('default', ['concat']);
        grunt.registerTask('default', ['uglify']);
    }
}())