import React from 'react';
import { Redirect, Switch, Route } from 'react-router';
import { Navbar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';



export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/> 

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>    
        </>
    )
}
