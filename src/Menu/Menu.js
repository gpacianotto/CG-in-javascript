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
    const [details, setDetails] = useState(false);

    const [innerCanvasHeight, setInnerCanvasHeight] = useState(0);
    const [innerCanvasWidth, setInnerCanvasWidth] = useState(0);

    return <>
    <div className='mt-4 mb-4'>
        
                
        <div className=''>        
            <h5>
                Menu Principal
            </h5>
                
            
            <Row className='text-center'>
                <Col xl='2'>
                    <div className='mr-5'>
                        <Button onClick={() => setDimForm(!dimForm)}>
                            Dimensões
                        </Button>
                    </div>
                </Col>
                <Col xl='2'>
                    <div className='mr-5'>
                        <Button onClick={() => setBrushForm(!brushForm)}>
                            Pinceis
                        </Button>
                    </div>
                </Col>
                <Col xl='2'>
                    <div className='mr-5'>
                        <Button onClick={() => setDetails(!details)}>
                            Detalhes
                        </Button>
                    </div>
                </Col>
            </Row>
                    
        </div>
            
    </div>
    
    <Row>
        
        {dimForm && 
        <Col xl='4'>
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
                    type="number"
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
                    type="number"
                    />
                </FormGroup>
                </Form>
                <Button
                    onClick={() =>{
                        if(innerCanvasHeight > 0 && innerCanvasWidth > 0)
                        {
                            setInnerCanvasHeight(0);
                            setInnerCanvasWidth(0);
                            setCanvasHeight(innerCanvasHeight);
                            setCanvasWidth(innerCanvasWidth);
                            setDimForm(false);
                        }
                        else{
                            alert("dimensões inválidas, precisam ser > 0");
                        }
                    }}
                >
                    Salvar
                </Button>
                </CardBody>
            </Card>
            </Col>
            }
        
    
    
    
        
        {brushForm && 
        <Col xl='4'>
            <Card>
                <CardBody>
                <CardTitle tag="h5">
                    Configurações de Pincel
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Configure aqui os pinceis
                </CardSubtitle>
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect">
                        Tipo de pincel
                        </Label>
                        <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                        >
                        <option>
                            1
                        </option>
                        <option>
                            2
                        </option>
                        <option>
                            3
                        </option>
                        <option>
                            4
                        </option>
                        <option>
                            5
                        </option>
                        </Input>
                    </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">
                    
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
            </Col>
            }

        {details &&
        <Col xl='4'>
        <Card>
                <CardBody>
                <CardTitle tag="h5">
                    Detalhes
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Detalhes da aplicação
                </CardSubtitle>
                
                </CardBody>
            </Card>
        </Col>    

        }    
        
    
        </Row>

    </>
}