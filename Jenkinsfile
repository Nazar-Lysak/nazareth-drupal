pipeline {
  agent any
  environment {
    THEME_NAME = "my_theme"
    DRUPAL_ROOT = "/var/www/html"
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build Theme') {
      steps {
        dir("$DRUPAL_ROOT/themes/$THEME_NAME") {
        //   sh "rm -rf build"
        //   sh "yarn install --ignore-engines"
        //   sh "yarn gulp build"
        }
      }
    }
  }
}