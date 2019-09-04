import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Banner from '../components/banner'
import Navbar from '../components/navbar-light'
import BenniesTabs from '../components/partners/bennies-tabs'
import EndusersBenefits from '../components/partners/endusers-benefits'
import PartnerTypes from '../components/partners/partner-types'
import Footer from '../components/footer'

export default () => (
	<Fragment>
		<Banner />
		<header id='partners-header' className='header partners-bg'>
			<Navbar />
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-sm-8'>
						<h1 className='partners-header pt-5'>
							Introducing Economic Empowerment for the Open Source Community
						</h1>
						<p className='partners-hero-text'>
							We are passionate about supporting, building, and using{' '}
							<Link to='/open-source' className='partners-hero-link'>
								open source
							</Link>{' '}
							software. Our Open Source Partnership Program brings secure, reliable and performant
							decentralized cloud storage to the open-source community.
						</p>
						<p className='partners-hero-text'>
							In addition to sharing revenue, we share all the necessary tools, components and connectors
							needed to incorporate decentralized cloud storage into your platform. Easy and effortless.
						</p>
						<Link to='/partners/#partner-types' className='d-flex justify-content-center'>
							<div className='btn btn-custom btn-partner'>Become a partner</div>
						</Link>
					</div>
				</div>
			</div>
		</header>
		<section id='current-partners' className='container-fluid'>
			<div className='container'>
				<div className='row justify-content-around align-items-center p-4 mb-5'>
					<img src={'img/partner-logos/couchbase.svg'} alt='Couchbase' className='partner-logo med' />
					<img src={'img/partner-logos/mongodb.svg'} alt='MongoDB' className='partner-logo' />
					<img src={'img/partner-logos/filezilla.svg'} alt='Filezilla' className='partner-logo' />
					<img src={'img/partner-logos/influxdb.svg'} alt='InfluxDB' className='partner-logo med' />
					<img src={'img/partner-logos/kafka-01.svg'} alt='Kafka' className='partner-logo' />
				</div>
				<div className='row justify-content-between align-items-center p-4'>
					<img src={'img/partner-logos/minio.svg'} alt='Minio' className='partner-logo small' />
					<img src={'img/partner-logos/nextcloud.svg'} alt='Nextcloud' className='partner-logo' />
					<img src={'img/partner-logos/mariaDbHome.png'} alt='Maria DB' className='partner-logo' />
					<img src={'img/partner-logos/plesk.svg'} alt='Plesk' className='partner-logo med' />
					<img src={'img/partner-logos/pydio.svg'} alt='Pydio' className='partner-logo med' />
					<img src={'img/partner-logos/zenko-io.svg'} alt='Zenko IO' className='partner-logo med' />
				</div>
			</div>
		</section>
		<section id='partner-benefits' className='container-fluid pt-0'>
			<BenniesTabs />
		</section>
		<section id='endusers' className='container-fluid py-0'>
			<EndusersBenefits />
		</section>
		<section id='partner-types' className='container-fluid'>
			<PartnerTypes />
		</section>
		<Footer />
	</Fragment>
)
