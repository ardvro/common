namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.adapter.ais.ent;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;
public class TextMiningController
{
    private IConnection _connection;
    public TextMiningController(IConnection connection)
    {
        _connection = connection;
    }

    public void Find(int id, Action<aisTm> callback)
    {
        _connection.Submit(new Object[] { id }, "ardvro/component/kenviro/TextMining/Find", callback);
    }

    public void GetSubjects(Action<List<aisTm>> callback)
    {
        _connection.Submit(new Object[] { }, "ardvro/component/kenviro/TextMining/GetSubjects", callback);
    }

    public void GetTopics(int subjectId, Action<List<aisTmTopic>> callback)
    {
        _connection.Submit(new Object[] { subjectId }, "ardvro/component/kenviro/TextMining/GetTopics", callback);
    }

    public void GetSentences(int topicId, Action<List<aisTmTopicSentence>> callback)
    {
        _connection.Submit(new Object[] { topicId }, "ardvro/component/kenviro/TextMining/GetSentences", callback);
    }

    public void GetDocuments(int subjectId, Action<List<aisTmDocument>> callback)
    {
        _connection.Submit(new Object[] { subjectId }, "ardvro/component/kenviro/TextMining/GetDocuments", callback);
    }

    public void Generate(Flexible data, Action<object> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/TextMining/Generate", callback);
    }

    public void InformationRetrieval(String subject, List<Flexible> documents, String rejectedWords, String filterPosTags, Action<object> callback)
    {
        Flexible args = new Flexible();
        args.Add("Subject", subject);
        args.Add("Documents", documents);
        args.Add("RejectedWords", rejectedWords);
        args.Add("FilterPosTags", filterPosTags);

        _connection.Submit(args, "ardvro/component/kenviro/TextMining/InformationRetrieval", callback);
    }

    public void InformationExtraction(String topic, String text, Action<String[]> callback)
    {
        _connection.Submit(new Object[] { topic, text}, "ardvro/component/kenviro/TextMining/TextSummarization", callback);
    }

    public void TextSummarization(String subject, List<Flexible> documents, Action<String> callback)
    {
        Flexible args = new Flexible();
        args.Add("Subject", subject);
        args.Add("Documents", documents);

        _connection.Submit(args, "ardvro/component/kenviro/TextMining/TextSummarization", callback);
    }

    public void PosTagging (String text, Action<object> callback)
    {
        _connection.Submit(new Object[] { text }, "ardvro/component/kenviro/TextMining/PosTagging", callback);
    }

    public void SplitSentences (String text, Action<String[]> callback)
    {
        _connection.Submit(new Object[] { text }, "ardvro/component/kenviro/TextMining/SplitSentences", callback);
    }

    public void RestructureTopics(int aisTmId, Action<int> callback)
    {
        _connection.Submit(new Object[] { aisTmId }, "ardvro/component/kenviro/TextMining/RestructureTopics", callback);
    }

}
