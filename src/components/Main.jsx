import { Card, CardBody, Heading, Image, Input, Stack, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
    const [item, setItem] = useState()
    let navigate = useNavigate()

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            setItem(res.data.categories)
        }
        fetch()
    }, [])

    return (
        <div className="wrapper">
            <header>
                <Link to={'/'}>Recipe App 🥣 </Link>
            </header>
            <div className="categories">
                {(!item) ? <Watch
                    height="80"
                    width="80"
                    radius="48"
                    color="#2B6CB0"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    /> : item.map((item) => {
                    return(
                    <Card onClick={() => navigate(`${item.strCategory}`)} sx={{
                        cursor: 'pointer',
                    }} key={item.idCategory} maxW='xs'>
                        <CardBody>
                            <Image
                            src={item.strCategoryThumb}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading size='md'>{item.strCategory}</Heading>
                            <Text>
                                {item.strCategoryDescription.slice(0, 100)}...
                            </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                    )
                }) 
                }
            </div>
        </div>
    );
}

export default Main;