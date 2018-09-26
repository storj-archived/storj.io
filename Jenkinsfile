node('node') {
  try {

    stage('Checkout') {
      checkout scm
    }

    stage('Build Images') {
      sh 'make build'
    }

    stage('Push Images') {
      echo 'Push to Repo'
      sh 'make push'
    }

    stage('Deploy') {
      echo 'Deploying to Repo'
      sh 'make deploy'
    }

  }

  catch (err) {
    currentBuild.result = "FAILURE"

    echo 'Caught ERROR!'
    echo "Error: ${err}"
  }
  finally {

    stage('Cleanup') {
      sh 'make clean'
      deleteDir()
    }

  }
}
