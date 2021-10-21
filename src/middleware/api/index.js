import axios from 'axios'

const baseURL = ''

export default {
	sendFiles(filesData) {
		const formData = new FormData()
		filesData.forEach(item => formData.append('file', item))
		return axios
			.post(`${baseURL}/api`, formData,  {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			.then(r => r.data)
	},
}
