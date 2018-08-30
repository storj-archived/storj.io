node('node') {
  try {

    def commit_id = sh(returnStdout: true, script: "git rev-parse --short HEAD").trim()

    stage('Checkout') {
      checkout scm
    }

    stage('Build Docker') {
      if (env.BRANCH_NAME != 'master') {
        commit_id = "${commit_id}-${env.BRANCH_NAME}"
      }

      echo 'Build dockerfile'
      sh "./dockerfiles/build/build-storj.io.sh ${commit_id}"

      echo 'Push to Repo'
      sh "./dockerfiles/build/push.sh storjlabs/storj.io:${commit_id}"
    }

    stage('Deploy') {
      echo "Branch name: ${env.BRANCH_NAME}"
      if (env.BRANCH_NAME == 'master') {
        sh(returnStdout: true, script: "./dockerfiles/deploy/deploy.production.sh storj-website deployment storjlabs/storj.io:${commit_id}")
      } else {
        sh(returnStdout: true, script: "./dockerfiles/deploy/deploy.staging.sh storj-website deployment storjlabs/storj.io:${commit_id}")
      }
    }

    stage('Cleanup') {
      sh "docker rmi storjlabs/storj.io:${commit_id}"
    }

  }

  catch (err) {
    currentBuild.result = "FAILURE"

    echo 'Caught ERROR!'
    echo "Error: ${err}"
  }
}
