import { useSSG } from 'nextra/ssg'

export function getStaticProps({ params }){
  return fetch(`https://api.github.com/repos/shuding/nextra`)
    .then((res) => res.json())
    .then((repo) => ({
      props: {
        // We add an `ssg` field to the page props,
        // which will be provided to the Nextra `useSSG` hook.
        
          stars: repo.stargazers_count,
        
      },
      revalidate: 60
    }))
}
export default function Repositories () {
  // Get the data from SSG, and render it as a component.
  const data = useSSG()
  console.log(data)
  return <strong>Hi</strong>
}