# Route Examples between Express, Angular and React

- Providing Routing examples between EXPRESS, Angular and React, notice the similarities:

## Express

```
app.get('/', function (_req, res)      <- this is a route to the root directory "/", e.g. https://cv64.us/
app.get('/about', function (_req, res) <- this is a route to the about directory, e.g. https://cv64.us/about/
app.get('/info', function (_req, res)  <- this is a route to the info directory, e.g. https://cv64.us/info/
```

## Angular

```
const routes: Routes = [
  { path: '', component: HomeComponent },        <- this is a route to the root directory "/", e.g. https://cv64.us/
  { path: 'about', component: AboutComponent },  <- this is a route to the about directory "/", e.g. https://cv64.us/about/
  { path: 'info', component: InfoComponent }     <- this is a route to the info directory "/", e.g. https://cv64.us/info/
];
```

## React

```
<Routes>
  <Route path="/" element={<Links />}>
    <Route index element={<Root/>} />            <- this is a route to the root directory "/", e.g. https://cv64.us/
      <Route path="about" element={<About/>} />  <- this is a route to the about directory "/", e.g. https://cv64.us/about/
      <Route path="info" element={<Info/>} />    <- this is a route to the info directory "/", e.g. https://cv64.us/info/
  </Route>
</Routes>
```
