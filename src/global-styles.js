import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --text-primary:#000;
    --bgPrimary:#fff;
   --bgSecondary: #F9F9F9;
   --pink: #0071bd;
   --light-blue: #e6f7ff;
   --border: #d9d9d9;
}

*,::before,::after{
    box-sizing:border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 10px;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* Style Any Class Global */
.app{
	display: flex;
	overflow: hidden;
}
.navbar{
	flex: 0 0 20%;
	width:100%;
	max-width: 100%;
	background: #001529;
}
.main{
	flex: 0 0 80%;
	width:100%;
	max-width: 100%;
	position: relative;
	min-height: 100vh;
}
.routes{
	padding: 20px;
	margin-bottom: 111px;
}
.footer{
	background-color: #001529;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
}

.select-news{
    width: 180px;
}
.news-card{
    min-height: 300px !important;
}
.news-image-container{
    display: flex !important;
    justify-content: space-between !important;
}
.news-title{
width: 70%;
}

.news-image-container img{
    width:100px;
    height:100px;
}
.news-card p{
    color: black;
    margin: 10px 0px !important;
	display: block;
}
.logo{
	padding-left: 20px;
	margin-bottom: 0px !important;
}
.nav li{
	font-size: 1.8rem;
}
.nav svg{
	height: 1.8rem;
	width: 1.8rem;
}



.coin-detail-container{
    margin: 30px;
}

.coin-heading-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid var(--border);
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 10px;
}

.coin-heading-container .coin-name{
    font-weight: 900;
    color: var(--pink);
}

.coin-heading-container p{
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 20px;
}

.stats-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

.stats-container h2{
    font-weight: 700;
    font-size: 1.4rem;
    margin-top: 20px;
    color: var(--pink);
}

.coin-details-heading{
    font-weight: 700 !important;
    margin-top: 20px !important;
    color: var(--pink) !important;
}

.coin-stats{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    font-size: 1rem;
    opacity: 0.9;
    padding: 20px;

}

.coin-stats-name{
    display: flex;
    gap: 10px;
    font-size: 1rem;
}

.stats{
    font-weight: 800;
}

.coin-value-statistics-heading p{
    font-size: 1rem;
    opacity: 0.9;
}

.coin-desc-link{
    display: flex;
    gap: 40px;
    margin-top: 40px;
    padding-top: 20px;
}

.coin-desc-link h2{
    font-weight: 700;
    color: var(--pink);
}

.coin-desc-link p{
    font-size: 1rem;
    opacity: 0.9;
}

.coin-desc-link a{
    color: var(--pink);
}

.coin-desc-link h3{
    font-weight: 700;
}

.coin-desc{
    flex: 0.5;
}

.coin-links{
  padding: 0px 20px;
    flex: 0.5;
}

.coin-link{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    padding: 20px;
}

.link-name{
    text-transform: capitalize;
    font-size: 1rem;
}

.coin-link a{
    color: var(--pink);
    font-weight: 700;
    font-size: 1rem;
}

.coin-link:hover, .coin-stats:hover{
    background-color: var(--bgSecondary);
}

@media screen and (max-width:1000px){
    .stats-container{
        flex-direction: column;
    }
    .coin-desc-link{
        flex-direction: column;
    }
    .stats-container h2{
        margin-top: 0px;
    }
}

@media screen and (max-width: 500px){
    .coin-links{
        padding: 0px;
    }
    .coin-detail-container{
        margin: 0;
    }
}
@media screen and (max-width: 500px){
    .heading{
        margin-top: 20px;
    }
}
.select-timeperiod{
    width: 200px !important;
    margin-top: 20px !important;
}


.provider-container{
    display: flex;
    justify-content: space-between;
}
.provider-name{
    margin-left: 10px;
}

.chart-header{
    display: flex;
    justify-content: space-between;
    gap: 50px;
    color: #0071bd;
}
.chart-title{
    color: #0071bd !important;
}
.price-container{
    display: flex !important;
    gap: 20px !important;
    align-items: center !important;
    flex-wrap: wrap !important;
}
.price-change{
    font-weight: 900 !important;
}
.current-price{
    margin-top: 0px !important;
    font-weight: 900 !important;
}
`;
