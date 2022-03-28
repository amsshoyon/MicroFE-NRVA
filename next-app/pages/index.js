import Head from 'next/head'
import React from 'react'
import AboutCard from '../components/AboutCard'
import { Button } from '../components/ButtonComponents'
import { Box } from '../components/LayoutComponents'

export default function Home() {
	return (
		<React.Fragment>
			<div className="container mx-auto">
				<AboutCard />
			</div>
		</React.Fragment>
	)
}
