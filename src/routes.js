import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/homePage";
import BlogPage from "./pages/blogPage";
import CreateBlogPage from "./pages/createBlogPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/create" element={<CreateBlogPage/>}/>
        
      </Switch>
    </Router>
  );
};
