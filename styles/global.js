import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  hello: {
    marginTop: 32,
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center'
  },
  errmsg: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  err: {
    color: '#E9446A',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  iTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase'
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F30'
  },
  button: {
    marginHorizontal: 30,
    marginTop: 32,
    backgroundColor: 'grey',
    borderRadius: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button2: {
    padding: 20,
    marginHorizontal: 30,
    marginTop: 32,
    backgroundColor: 'red',
    borderRadius: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    
  },
  container3: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleText: {
    fontFamily: '#161F30',
    fontSize: 23,
    color: '#333'
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 30,
    flexDirection: 'row',
    flex: 1
  },
  itemText: {
    marginLeft: 10,
    paddingRight: 80
  },
  input2: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row'
    // marginTop:20
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  content: {
    padding: 40,
    flex: 1,
    backgroundColor: 'gray'
  },
  list: {
    marginTop: 30,
    flex: 1
    // backgroundColor: 'white'
  }
});
