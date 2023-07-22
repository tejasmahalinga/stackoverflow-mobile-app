import React, {useEffect, useState} from 'react';
import {FlatList, Linking, Text, TouchableOpacity, View} from 'react-native';
import {fetchHotQuestionsFromTag} from './apiServices';
import {styles} from './styles';
import CustomProgressBar from '../../components/CustomProgressBar';

const Index = ({tag}: any) => {
  const [questionsData, setQuestionData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchMoreData = () => {
    if (hasMore && !loadingMore) {
      setCurrentPage(prev => prev + 1);
      setLoadingMore(true);
    }
  };

  const getQuestions = async (tag: string, currentPage: number) => {
    const response = await fetchHotQuestionsFromTag(tag, currentPage);
    setLoadingScreen(false);
    setLoadingMore(false);
    if (response.status === 400) {
      setErrorMsg(response.data.error_message);
      return;
    }
    if (response) {
      if (currentPage > 1) {
        setQuestionData([...questionsData, ...response.items]);
      } else {
        setQuestionData(response.items);
      }
      setHasMore(response.has_more);
    }
  };

  useEffect(() => {
    getQuestions(tag, currentPage);
  }, [tag, currentPage]);

  const RenderItem = ({question, index}: any) => {
    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(question.link)}
        key={index}
        style={[styles.cardContainer, styles.elevation]}>
        <View>
          <Text>{`Question ${index + 1} :`}</Text>
          <Text style={styles.questionText}>{question?.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {loadingScreen ? (
        <View style={styles.loadingScreenView}>
          <CustomProgressBar />
        </View>
      ) : questionsData.length > 0 ? (
        <>
          <View>
            <FlatList
              data={questionsData}
              renderItem={({item, index}: any) => (
                <RenderItem question={item} index={index} />
              )}
              onEndReached={fetchMoreData}
              onEndReachedThreshold={0.4}
              keyExtractor={(question: any) => question.question_id}
              style={loadingMore ? {height: '97%'} : null}
            />
          </View>
          {loadingMore ? (
            <View style={styles.loadingMoreView}>
              <Text style={styles.loadingMoreText}>
                Loading more. Please wait...
              </Text>
            </View>
          ) : null}
        </>
      ) : (
        <Text style={styles.noData}>
          {errorMsg ? errorMsg : 'No Questions Found!'}
        </Text>
      )}
    </View>
  );
};

export default Index;
