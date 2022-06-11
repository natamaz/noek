module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),


	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		},
	},

	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/main.js'
			],
			dest: '../markup/js/main.min.js'
		},
	},
	

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/main.min.js': ['dist/js/main.js'],
				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/card-of-product.min.js': ['dist/js/plugin/card-of-product.js'],
				'../markup/js/production.min.js': ['dist/js/plugin/production.js'],
				'../markup/js/coin-box.min.js': ['dist/js/plugin/coin-box.js'],
				'../markup/js/about-company.min.js': ['dist/js/plugin/about-company.js'],
				'../markup/js/delivery-pay.min.js': ['dist/js/plugin/delivery-pay.js'],
				'../markup/js/index.min.js': ['dist/js/plugin/index.js'],
			},
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/**/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '**/*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
					templates: '<%= fixturesPath %>/*.html',
					layout: {
						header: '<%= fixturesPath %>/templates/header.html',
						footer: '<%= fixturesPath %>/templates/footer.html',
						popUp: '<%= fixturesPath %>/templates/popUp.html',
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');




// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'htmlbuild', 'watch', 'sass']);



};
