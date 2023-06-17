import { Card, CardBody, Heading, Image, Stack} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";
import { useParams, Link, useNavigate } from "react-router-dom";

const CategoryList = () => {
    const [item, setItem] = useState()
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
            setItem(res.data.meals)
        }
        fetch()
    }, [])


    return (
        <div className="wrapper">
            <header>
                <Link to={'/'}>Recipe App 🥣 </Link>
            </header>
            <div className="categories">
                {!item ? <Watch
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
                    <Card onClick={() => navigate(`${item.idMeal}`)} sx={{
                        cursor: 'pointer',
                    }} key={item.idMeal} maxW='xs'>
                        <CardBody>
                            <Image
                            src={item.strMealThumb}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading size='md'>{item.strMeal}</Heading>
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

export default CategoryList;