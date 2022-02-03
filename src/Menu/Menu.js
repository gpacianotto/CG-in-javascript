import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Row,
    Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Menu({setCanvasHeight, setCanvasWidth}) {
    const [dimForm, setDimForm] = useState(false);
    const [brushForm, setBrushForm] = useState(false);

    const [innerCanvasHeight, setInnerCanvasHeight] = useState(0);
    const [innerCanvasWidth, setInnerCanvasWidth] = useState(0);

    return <>
    <div className='mt-4 mb-4'>
        
                
        <div className=''>        
            <h5>
                Menu Principal
            </h5>
                
            
            <Row>
                <Col xl='1'>
                    <div className='mr-5'>
                        <Button onClick={() => setDimForm(!dimForm)}>
                            Dimensões
                        </Button>
                    </div>
                </Col>
                <Col xl='1'>
                    <div className='mr-5'>
                        <Button onClick={() => setBrushForm(!brushForm)}>
                            Pinceis
                        </Button>
                    </div>
                </Col>
            </Row>
                    
        </div>
            
    </div>
    
    {dimForm && 
    <Card>
        <CardBody>
        <CardTitle tag="h5">
            Dimensões
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            Configure aqui as dimensões do canvas
        </CardSubtitle>
        <Form>
        <FormGroup>
            <Label for="exampleEmail">
            Largura do Quadro
            </Label>
            <Input
            id="width"
            name="largura"
            placeholder="Largura"
            type="text"
            onChange={(e) =>{
                setInnerCanvasWidth(parseInt(e.target.value));
            }}
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">
            Altura do Quadro
            </Label>
            <Input
            id="width"
            name="largura"
            placeholder="Altura"
            onChange={(e) =>{
                setInnerCanvasHeight(parseInt(e.target.value));
            }}
            type="text"
            />
        </FormGroup>
        </Form>
        <Button
            onClick={() =>{
                setInnerCanvasHeight(0);
                setInnerCanvasWidth(0);
                setCanvasHeight(innerCanvasHeight);
                setDimForm(false);
            }}
        >
            Salvar
        </Button>
        </CardBody>
    </Card>}
    
    {brushForm && 
    
    <Card>
        <CardBody>
        <CardTitle tag="h5">
            Dimensões
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            Configure aqui as dimensões do canvas
        </CardSubtitle>
        <Form>
        <FormGroup>
            <Label for="exampleEmail">
            Largura do Quadro
            </Label>
            <Input
            id="width"
            name="largura"
            placeholder="Largura"
            type="text"
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">
            Altura do Quadro
            </Label>
            <Input
            id="width"
            name="largura"
            placeholder="Altura"
            type="text"
            />
        </FormGroup>
        </Form>
        <Button>
            Salvar
        </Button>
        </CardBody>
    </Card>

    }

    </>
}