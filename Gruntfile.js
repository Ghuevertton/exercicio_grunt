module.exports = function(grunt) {
    // Configuração do projeto
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      // Configuração do LESS
    less: {
        development: {
        files: {
            'style.css': 'main.less' // Compila o arquivo LESS para CSS
            }
        }
    },
    
      // Configuração da compressão do JavaScript
    uglify: {
        build: {
          src: 'main.js', // Arquivo JavaScript de entrada
          dest: 'main.min.js' // Arquivo JavaScript comprimido de saída
        }
    }
    });
    
    // Carrega os plugins necessários
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Registra as tarefas
    grunt.registerTask('default', ['less', 'uglify']);
    };