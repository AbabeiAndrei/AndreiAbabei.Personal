/// <binding ProjectOpened='watch' />
module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'app/Style/style.css': 'app/Style/style.less' // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['app/Style/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('all', ['less']);
};