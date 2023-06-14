import './App.css'
import { VideoListType, MusicListType } from "./types"
import Container from 'react-bootstrap/Container'
import MusicList from './components/MusicList'
import VideoList from './components/VideoList'

import benList from './data/ben10.json'
import penguinList from './data/clubpenguin.json'
import whoMcList from './data/whomc.json'
import whoMusicList from './data/whomusic.json'

const typedBenList: VideoListType[] = benList
const typedPenguinList: VideoListType[] = penguinList
const typedWhoMcList: VideoListType[] = whoMcList
const typedWhoMusicList: MusicListType[] = whoMusicList

function App() {
  return (
    <>
      <Container>
        <h1>TempusWare: The Archive</h1>
        <h2>Doctor Who Music (2014-16)</h2>
        <MusicList list={typedWhoMusicList} defaultTrack="270578206" />
        <h2>Minecraft Doctor Who (2014-20)</h2>
        <VideoList list={typedWhoMcList} defaultVid="PcPTIs6y8f0" />
        <h2>Club Penguin (2012-21)</h2>
        <VideoList list={typedPenguinList} defaultVid="PY-CRh25HCs" />
        <h2>Ben 10 (2016-21)</h2>
        <VideoList list={typedBenList} defaultVid="hA2iZlW20NI" />
      </Container>
    </>
  )
}

export default App