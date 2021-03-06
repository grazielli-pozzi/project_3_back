import processesRepository from '../repository/processes.repository';
import ApplicationError from '../errors/ApplicationError';

class ProcessesService {
    constructor(processRepository) {
        this.processesRepository = processRepository;
    }

    async get(id, search) {
        try {
            const processes = await this.processesRepository.get(id, search);
            return processes;
        } catch (error) {
            throw new ApplicationError({ message: error.message, type: 'Processes - get method', status: 502 });
        }
    }

    async getByCustomerID(id, search) {
        try {
            const processes = await this.processesRepository.getByCustomerID(id, search);
            return processes;
        } catch (error) {
            throw new ApplicationError({ message: error.message, type: 'Processes - get method', status: 502 });
        }
    }

    async getOne(id) {
        const process = await this.processesRepository.getOne(id);
        return process;
    }

    async create(processBody, id) {
        await this.processesRepository.create(processBody, id);
    }

    async updateOne(processId, data) {
        const process = await this.processesRepository.updateOne(processId, data);
        return process;
    }

    async deleteOne(id) {
        await this.processesRepository.deleteOne(id);
    }

}

export default new ProcessesService(processesRepository);
