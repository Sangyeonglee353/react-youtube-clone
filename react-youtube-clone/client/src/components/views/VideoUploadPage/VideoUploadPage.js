import React from 'react'
import { Typography, Button, Form, message, input, Icon } from 'antd';
import Dropzone from 'react-dropzone';

const {Title} = Typography;

function VideoUploadPage() {
  return (
    <div style={{ maxWidth: '700px', margin:'2rem auto'}}>
        <div style={{ textAlign:'center', marginButton:'2rem'}}>
            <Title level={2}>Upload Video</Title>
        </div>

        <Form onSubmit>
            <div style={{ display:'flex', justifyContent:'space-between'}}>
                {/* Drap zone */}
                <Dropzone
                onDrop
                multiple
                maxSize>
                {({getRootProps, getInputProps}) => (
                    <div style={{ width: '300px', height: '240px', border:'1px solid lightgray',
                    alignItems:'center', justifyContent:'center'}} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{ fontSize:'3rem'}} />
                    </div>
                )}

                </Dropzone>
                {/* Thumbnail */}
                <div>
                    <img src alt />
                </div>
            </div>

            <br />
            <br />
            <label>Title</label>
            <input
                onChange
                value
            />
            <br />
            <br />

            <select onChange>
                <option key value></option>
            </select>

            <select onChange>
                <option key value></option>
            </select>

            <Button type="primary" size="large" onClick>
                Submit
            </Button>

        </Form>
    </div>
  )
}

export default VideoUploadPage