import React from 'react'
import { Header } from '../../pages/Header/Header'
import { Footer } from '../../pages/Footer/Footer'
import { Outlet } from 'react-router'
import { TrendingData } from '../../pages/TrendingData/TrendingData'
import { Hero } from '../../pages/Hero/Hero'
import StatsSection from '../../pages/StatsSection/StatsSection'

export const Home = () => {
  return (
<div>
<Hero></Hero>
<StatsSection></StatsSection>
<TrendingData></TrendingData>
</div>
  )
}
