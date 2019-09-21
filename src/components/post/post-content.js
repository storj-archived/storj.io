import React from 'react'

export default ({ html }) => (
	<div id='post-content' className='container'>
		<div className='row justify-content-center'>
			<div className='col-10'>
				<div className='post-content' dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	</div>
)
