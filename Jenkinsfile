node('node') {
  try {

    stage 'Checkout'

      checkout scm

    stage 'Build Docker'

      sh "git rev-parse --short HEAD > .git/commit-id"
      def commit_id = readFile('.git/commit-id').trim()

      echo 'Build dockerfile'
      sh "./dockerfiles/build/build-storj.io.sh ${env.BUILD_ID} ${commit_id} latest"

      echo 'Push to Repo'
      sh "./dockerfiles/build/push.sh storjlabs/storj.io:${env.BUILD_ID} storjlabs/storj.io:${commit_id} storjlabs/storj.io:latest"

    stage 'Deploy'

      def prod_deploy_enabled = true
      def staging_tag = sh(returnStdout: true, script: "git tag | grep 'staging'").trim()

      echo "staging_tag is: $staging_tag"
      if (staging_tag == 'staging') {
        sh "./dockerfiles/deploy/deploy.staging.sh storj-website deployment storjlabs/storj.io:${commit_id}"
      }

      echo "Branch name: ${env.BRANCH_NAME}"
      if (${env.BRANCH_NAME} == 'master' && prod_deploy_enabled == true) {
        sh "./dockerfiles/deploy/deploy.production.sh storj-website deployment storjlabs/storj.io:${commit_id}"
      }

    stage 'Cleanup'

      echo 'prune and cleanup'
      sh """#!/bin/bash -e
        source '/var/lib/jenkins/.nvm/nvm.sh'
        rm node_modules -rf
      """

      /*
      mail body: 'project build successful',
        from: 'build@storj.io',
        replyTo: 'build@storj.io',
        subject: 'project build successful',
        to: "${env.CHANGE_AUTHOR_EMAIL}"
      */

  }

  catch (err) {
    currentBuild.result = "FAILURE"

    /*
    mail body: "project build error is here: ${env.BUILD_URL}" ,
      from: 'build@storj.io',
      replyTo: 'build@storj.io',
      subject: 'project build failed',
      to: "${env.CHANGE_AUTHOR_EMAIL}"

      throw err
    */
  }
}
