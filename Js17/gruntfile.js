module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: ['js/src/**/*.js'],
            dest: 'js/dist/script.min.js'
          }
        },
        uglify: {
            options: {
            mangle: false
            },
            my_target: {
                files: {
                    'js/dist/script.min.js': ['js/dist/script.min.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                'css/dist/style.min.css': ['css/src/**/*.css', '!css/src/reset.css'],
                'css/dist/reset.min.css': ['css/src/reset.css']
                }
            }
        }
    //     imagemin: {
    //       dynamic: {
    //           files: [{
    //               expand: true,
    //               cwd: 'img/img-src/',
    //               src: ['**/*.{png,jpg,gif}'],
    //               dest: 'img/'
    //           }]
    //         }
    //     },
    
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['concat','uglify','cssmin']);

};
