import { FunctionComponent, useState } from 'react'
import { MusicListType } from "../types"
import '../App.css'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

type MusicListProps = {
    list: MusicListType[]
    defaultTrack: string
}

const MusicList: FunctionComponent<MusicListProps> = function ( {list, defaultTrack} ) {
  const [ display, setDisplay ] = useState(`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${defaultTrack}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`)
  const changeTrack = (track: MusicListType) => {
    let url: string = ""
    if (track.platform === "youtube") {
        url = `https://www.youtube.com/embed/${track.trackID}?autoplay=1`
        if (track.intro.length > 0) url += `&start=${track.intro}`
    }
    else if (track.platform === "soundcloud")
        url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.trackID}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`
    setDisplay(url)
  }
  return (
    <Row>
        <Col md={6}>
            <div className="container text-center ratio ratio-16x9">
                <iframe src={`${display}`} allowFullScreen></iframe>
            </div>
        </Col>
        <Col md={6}>
            <div style={{height:"300px",overflowY:"auto"}}>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Play</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((track, x) => (
                            <tr key={x}>
                            <td>{x + 1}</td>
                            <td>{track.title}</td>
                            <td>{track.date}</td>
                            <td><Button onClick={() => {changeTrack(track)}}>Play</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Col>
    </Row>
  )
}

export default MusicList