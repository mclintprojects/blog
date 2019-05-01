---
title: How to make a custom view in Xamarin Android
published: 02/14/2018
readTime: 5
---

I’ve written a lot of **custom**\* views. Custom with an asterisk because in reality they were all a combination of already existing android views (compound views). Recently however, I had to write an entirely new view from scratch for a project I was working on so this tutorial would be an easy-to-follow guide on how to write your own custom view for use in your Xamarin Android applications.

In this tutorial, we’ll be using C# with Xamarin.Android to write our custom view. The knowledge here however, still is easily transferable to other languages like Java.

You can choose to write a custom in a separate Xamarin Android class library project or in your existing Xamarin Android app project. In this tutorial, we’ll be writing our custom view in an existing Xamarin Android app project.

Here’s what we’ll be building: IconView
