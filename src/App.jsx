import React, { useEffect, useState } from 'react'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import MainCarusel from './components/Main/MainCarusel'
import Layout from './Layout/Layout'
import Error from './components/Error'
import CompanyPage from './components/Main/CompanyPage'
import Header from './components/Header/Header'

function App() {
	const [basket, setBasket] = useState([])
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch("../../data/data.json")
			.then(res => res.json())
			.then(item => setData(item))
	}, [])


	function addToBasket(id, title, img, price) {
		const basketObj = {
			count: 1,
			id,
			title,
			img,
			price
		}


		setBasket(prevBasket => [...prevBasket, basketObj])


	}


	return (
		<>
			<Header basket={basket} setBasket={setBasket} />
			<Routes>
				<Route path='/' element={<Layout basket={basket} />}>
					<Route index element={<MainCarusel />} />
					<Route path='/kompaniyalar' element={<CompanyPage />} />
					<Route path='menu/:category' element={<Main addToBasket={addToBasket}  {...data} />} />

				</Route>

				<Route path='*' element={<Error />} />
			</Routes>
		</>
	)
}

export default App