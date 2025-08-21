# Journey

## Beginning

- First I wanted to have a very basic version, just the typical pattern with useEffect for client-side fetching. All branches are available in the repository.
  I made a branch for this basic solution to play around with the styles, have something to compare against the complete solution and to play around in Vercel early.

---

## SWR

- Then I tackled the SWR and the debouncing approach in another branch. I found SWR very intuitive to use, I wish I had found out about it earlier. I also found that when erasing the search term completely in the input, the result from that also got debounced so I added the search term being empty as another condition to decide on how to make the request.

- I watched this [quick tutorial](https://youtu.be/CQ5yHU1wYOo)

- Read the [official website](https://swr.vercel.app/)

---

## Known Issues

1. Regarding the slow connection notification feature, during testing with 3G throttling and cache disabled from the devtools it works perfectly when doing searches. However, during the initial listing we may not be able to get properly notified on the slow connectivity, at least up until the request is almost resolved. My guess is that this is because fetching begins after hydration, and on slower connections, the network throttle delays the JavaScript bundle load. Perhaps the onLoadingSlow timer only starts counting when fetching begins, not from the start of navigation. Hence, the warning appears too late or not at all depending on the **loadingTimeout** value. But it will work properly right when doing searches, because the bundle will already be loaded by then.

2. You may sometimes feel minor stuttering when typing very fast on the search box.
