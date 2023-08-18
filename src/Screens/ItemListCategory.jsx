import { FlatList, StyleSheet, View} from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'
import Msn from '../Components/Msn'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../Services/shopServices'
import { StatusBar } from 'react-native'

const ItemListCategory = ({
  navigation,
  route
}) => {

  const {category} = route.params
  //const productsSelected = useSelector (state => state.shopReducer.value.productsSelected)
  const categorySelected = useSelector (state => state.shopReducer.value.categorySelected)
  const {data: productsSelected, isError, isLoading} = useGetProductsByCategoryQuery(categorySelected)



  console.log(category);
  
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState(" ")
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  useEffect(()=> {
    //Lógica de manejo de category
    if(productsSelected){
      const productsFiltered = productsSelected.filter(product =>  product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setProducts(productsFiltered)
    }
    

  }, [productsSelected, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)
    //declaramos el modal
    

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError( <Msn />)
      setIsModalOpen(!isModalOpen)
      
      //setKeywordError(!setKeywordError)

      //console.log(setKeywordError)
    }

  }  

  return (
    <View style={styles.container}>
        <Search 
          onSearch={onSearch}
          
          goBack={()=> navigation.goBack()}
        />
        <View style={styles.container2}>
        <FlatList  
            
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => <ProductItem 
              item={item}
              navigation={navigation}
            />}
            showsVerticalScrollIndicator={false}
            
    />
      </View>  
         

             <Msn  
              
              error={keywordError}
              setIsModalOpen={setIsModalOpen}
              isModalOpen = {isModalOpen} 
          />

        
         
        
       
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
        padding:6,
        height: '100%',
        backgroundColor: colors.beige,
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container2:{
      padding:10,
      height: '78%',
      backgroundColor: colors.beige,
     
    },
    modalMsbPri: {
      flex: 1,
      alignContent: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center'
    }
})



