import ChromaGrid from './components/ChromaGrid'
import Snowfall from './components/Snowfall'

const thewinterarchive = [
  { title: "Snowy Mountain", subtitle: "Winter", image: "/photos/Snowy-mountain.jpg", borderColor: "#7cc4ff", gradient: "linear-gradient(145deg, #7cc4ff, #000)" },
  { title: "Snow Forest", subtitle: "Nature", image: "/photos/Snow-forest.jpg", borderColor: "#7cc4ff", gradient: "linear-gradient(145deg, #7cc4ff, #000)" },
  { title: "Snowfall Night", subtitle: "City Lights", image: "/photos/Snowfall-night.jpg", borderColor: "#ffcc70", gradient: "linear-gradient(145deg, #ffcc70, #000)" },
  { title: "Frozen Lake", subtitle: "Winter", image: "/photos/Frozen-lake.jpg", borderColor: "#7cc4ff", gradient: "linear-gradient(145deg, #7cc4ff, #000)" },
  { title: "Winter Road Trip", subtitle: "Road Trip", image: "/photos/Winter-road.jpg", borderColor: "#ffffff", gradient: "linear-gradient(145deg, #ffffff, #000)" },
  { title: "Snow Trek", subtitle: "Hills", image: "/photos/Snow-trek.jpg", borderColor: "#7cc4ff", gradient: "linear-gradient(145deg, #7cc4ff, #000)" },
];
function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', padding: '20px' }}>
      <Snowfall />
     <h1 style={{ color: '#fff', textAlign: 'center', fontSize: '48px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', fontFamily: 'Georgia, serif', marginBottom: '5px' }}>The Winter Archive</h1>
<p style={{ color: '#a8c8e8', textAlign: 'center', fontSize: '16px', letterSpacing: '2px', marginTop: '0', fontStyle: 'italic' }}>A curated collection of frozen moments</p>
     <ChromaGrid items={thewinterarchive} radius={400} damping={0.45} fadeOut={1} />
    </div>
  )
}
export default App