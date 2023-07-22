import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 5,
  },

  cardContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  elevation: {
    elevation: 3,
    shadowColor: '#52006A',
  },
  questionText: {
    fontWeight: '800',
    marginVertical: 5,
  },
  noData: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 100,
  },
  loadingScreenView: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingMoreText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#575757',
  },
  loadingMoreView: {justifyContent: 'center', alignItems: 'center'},
});
