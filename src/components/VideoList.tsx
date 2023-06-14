import { FunctionComponent, useState } from 'react'
import { VideoListType } from "../types"
import '../App.css'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

type VideoListProps = {
    list: VideoListType[]
    defaultVid: string
}

const VideoList: FunctionComponent<VideoListProps> = function ( {list, defaultVid} ) {
  const [ display, setDisplay ] = useState(defaultVid)
  return (
    <Row>
        <Col md={6}>
            <div className="container text-center ratio ratio-16x9">
                <iframe src={`https://www.youtube.com/embed/${display}`} allowFullScreen></iframe>
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
                        {list.map((video, x) => (
                            <tr key={x}>
                            <td>{x + 1}</td>
                            <td>{video.title}</td>
                            <td>{video.date}</td>
                            <td><Button onClick={() => {setDisplay(video.videoID)}}>Play</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Col>
    </Row>
  )
}

export default VideoList