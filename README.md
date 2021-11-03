# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / React Arch Map | Complete
|Day 3| Core Application Structure | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete

## Project Links

- [cryptoFOMO App - github repo link](https://github.com/mpenajoia/CryptoDreamsApp)
- [cryptoFOMO App - deployment link](https://mpenajoia.github.io/CryptoDreamsApp/)

## Project Description

The final product for this project will be an app to reflect current and past pricing for a select few (as a default) cryptocurrencies whose information is being pulled from a public API. A search/input bar will ask the user for a dollar amount which, after submission, will return values, after some math logic, for how much the inputted amount would have gained/lost had it being invested in the selected cryptocurrency in the past hour, day, week and month. Optionally, there will be an option to add/search for a cryptocurrency that the user might be interested in running the same logic on. Lastly, the app will be mobile first and responsive to bigger screen sizes.

## API

Coingecko.com provides an public API with all the information I need for this project. 

 - [https://www.coingecko.com/en/api/documentation](Coingecko)

```
{
id: "bitcoin",
symbol: "btc",
name: "Bitcoin",
asset_platform_id: null,
platforms: {
: ""
},
block_time_in_minutes: 10,
hashing_algorithm: "SHA-256",
categories: [
"Cryptocurrency"
],
public_notice: null,
additional_notices: [ ],
localization: {},
description: {},
links: {},
image: {
thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
small: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
},
country_origin: "",
genesis_date: "2009-01-03",
sentiment_votes_up_percentage: 77.84,
sentiment_votes_down_percentage: 22.16,
market_cap_rank: 1,
coingecko_rank: 2,
coingecko_score: 81.411,
developer_score: 101.306,
community_score: 73.064,
liquidity_score: 100.054,
public_interest_score: 0,
market_data: {},
community_data: {},
developer_data: {},
public_interest_stats: {
alexa_rank: 9440,
bing_matches: null
},
status_updates: [ ],
last_updated: "2021-10-29T01:29:11.928Z",
tickers: []
}
```


## Wireframes

- [Wireframe](https://res.cloudinary.com/ds2rdojzc/image/upload/v1635525068/CryptoDreamsApp/IMG_4452_inhkod.jpg)
- [React Architecture](https://res.cloudinary.com/ds2rdojzc/image/upload/a_090/v1635525069/CryptoDreamsApp/IMG_4453_le0ezp.jpg)


### MVP/PostMVP:

#### MVP 
- Use external API 
- Render price data on page 
- Allow user to toggle between pre-set cryptocurrencies
- Allow user to input a number value
- Render updated price calculations
- Aesthetically pleasing design

#### PostMVP 

- Add ability for user to search a specific cryptocurrencies to run same pricing logic
- Different color themes for the pre-selected options and a neutral color theme for any user added cryptocurrency 


## Components


Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header housing the nav and remain across all pages | 
| Footer | This will render the footer and remain across all pages |
| Main | This will render the main content of the About, Wrapper and Content Components |
| About | Description about the app |
| Contact | Contact Info |
| Wrapper | Will render the Sidebar and Content Components | 
| Sidebar | Will render 5 pre-selected crypto links to change the Content component possible option to add a crypto, the option will render the Additional component |
| Additional | Renders in the Content component with a search bar and search results with an Add button to Add option to Sidebar |
| Content | Will render pricing information for the selected crypto from the Sidebar and the Input Component OR the Additional component if selected |
| Input| Input bar to take user submitted value to run logic for results to populate in the pricing breakdowns  |


## MVP

| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | 
| Pulling Api data | H | 2hrs|  2hrs | 
| Making components and linking/routing them correctly | H | 6hrs|  2hrs | 
| About/Contact/Footer/Nav | H | 3hrs|  1hrs | 
| Populating Api data correctly | H | 5hrs|  4hrs | 
| Taking user input value to run math logic and return results | H | 5hrs|  5hrs | 
| Aesthetics/CSS | H | 7hrs|  5hrs | 
| Responsiveness | H | 4hrs|  1hrs | 
| Correct use of React Hooks | H | 4hrs|  3hrs | 
| Correct use of methods | H | 4hrs|  2hrs | 
| Total | H | 40hrs| 25hrs |

## Post MVP

| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | 
| Ability for user to search for their own crypto | H | 6hrs|  3hrs | 
| Some easter eggs | H | 2hrs|  .5hrs |  
| Total | H | 8hrs| 3.5hrs |


## Inspiration
Layout and color palette inspirations
 - [Cryptocurrency Mobile App / UI UX design by Alexandra Shvetsova](https://www.behance.net/gallery/129750497/Cryptocurrency-Mobile-App-UI-UX-design?tracking_source=search_projects_recommended%7Ccrypto%20app)
 - [Trading Platform by Alexa Nikitina](https://www.behance.net/gallery/90482491/Trading-Platform?tracking_source=search_projects_recommended%7Ccrypto%20app) 

## Code Snippet

Combination of useState and a ternary to toggle error/instructions for a user input 

```js
const [error, setError] = useState(true)
    const [showTimeslots, setShowTimeslots] = useState(false)
    const handleSubmitAmount = (event) => {
        event.preventDefault();
        if(isNaN(inputAmount)){
            setShowTimeslots(false)
            setError(false)
        }else{
            setSendAmount(inputAmount)
            setShowTimeslots(true)
            setError(true)
        }
    }
```

Inside JSX:
```js
<div className="amount-input">
	<p className="how-much">{error ? 'How much did you miss out on?' : 'Please enter a valid number'}</p>
	<form onSubmit={handleSubmitAmount}>
		<input onChange={handleOnChange} value={inputAmount} type="text" placeholder="enter an amount" />
	</form>
</div>

```