import React from 'react';
import { Text,View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const {
            textAlignment,
            thumbnailStyle,
            thumbnailContainer,
            headerTextTitle,
            imageSize
          } = styles;

    return (
        <Card>
          <CardSection>
            <View style={thumbnailContainer}>
              <Image
                style={thumbnailStyle}
                source={{ uri: thumbnail_image }}
              />
            </View>
            <View style={textAlignment}>
              <Text style={headerTextTitle}>{title}</Text>
              <Text>{artist}</Text>
            </View>
          </CardSection>
          <CardSection>
            <Image
              style={imageSize}
              source={{ uri: image }}
            />
          </CardSection>
          <CardSection>
            <Button onPress={() => Linking.openURL(url)}> Buy Now </Button>
          </CardSection>
        </Card>
    );
};

const styles = {
  textAlignment: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextTitle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageSize: {
    height: 300,
    width: null,
    flex: 1
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default AlbumDetail;
